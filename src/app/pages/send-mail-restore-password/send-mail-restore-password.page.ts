import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { RestoreAccountService } from "src/app/services/restore-account.service";
import { SpinnerService } from "src/app/services/spinner.service";
import Swal from "sweetalert2";

@Component({
  selector: "app-send-mail-restore-password",
  templateUrl: "./send-mail-restore-password.page.html",
  styleUrls: ["./send-mail-restore-password.page.scss"],
})
export class SendMailRestorePasswordPage implements OnInit {
  public sendEmail: boolean = false;
  public email = new FormControl("", [Validators.email, Validators.required]);

  constructor(
    private restoreAccountService: RestoreAccountService,
    private spinner: SpinnerService,
    private router: Router
  ) {}

  ngOnInit() {}

  validInput() {
    return this.email.errors && this.email.touched;
  }

  sendMail() {
    if (this.email.invalid) return this.email.markAllAsTouched();

    this.spinner.setActive(true);

    this.restoreAccountService
      .sendMailRestoreAccount(this.email.value!)
      .subscribe({
        next: (response) => {
          this.spinner.setActive(false);
          Swal.fire({
            title: "Listo!",
            text: response.message,
            icon: "success",
            heightAuto: false,
          });
          this.sendEmail = true;
          setTimeout(() => {
            this.router.navigateByUrl("login");
          }, 15000);
        },
        error: ({ error }) => {
          this.spinner.setActive(false);
          if (error.status === 400) {
            Swal.fire({
              title: "Lo sentimos!",
              text: "El correo ingresado no existe",
              icon: "error",
              heightAuto: false,
            });
          } else if (error.status === 401) {
            Swal.fire({
              title: "Lo sentimos!",
              text: `Ya se a enviado un correo recuperación a ${this.email.value} recientemente`,
              icon: "error",
              heightAuto: false,
            });
          } else {
            Swal.fire({
              title: "Lo sentimos!",
              text:
                "Ha ocurrido un error inesperado en el sistema, vuelva a intentarlo mas tarde",
              icon: "error",
              heightAuto: false,
            });
          }
        },
      });
  }
}
