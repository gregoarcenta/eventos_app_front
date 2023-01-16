import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { LoginService } from "./login.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  public avatars = [
    {
      img: "av-1.png",
      seleccionado: true,
    },
    {
      img: "av-2.png",
      seleccionado: false,
    },
    {
      img: "av-3.png",
      seleccionado: false,
    },
    {
      img: "av-4.png",
      seleccionado: false,
    },
    {
      img: "av-5.png",
      seleccionado: false,
    },
    {
      img: "av-6.png",
      seleccionado: false,
    },
    {
      img: "av-7.png",
      seleccionado: false,
    },
    {
      img: "av-8.png",
      seleccionado: false,
    },
  ];

  public loginForm = this.fb.group({
    username: ["", [Validators.required]],
    password: ["", [Validators.required]],
  });

  constructor(
    private loginService: LoginService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {}

  validInput(name: string) {
    return this.loginForm.get(name)?.invalid && this.loginForm.get(name)?.touched;
  }

  login() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.loginService.login(this.loginForm.value).subscribe({
      next: (response) => {
        this.router.navigateByUrl("/");
        // this.spinner.setActive(false);
      },
      error: ({ error }) => {
        // this.spinner.setActive(false);
        if (error.status === 422 || error.status === 401) {
          console.log('Usuario o contraseña incorrectos');

          // Swal.fire("Error", "Usuario o contraseña incorrectos", "error");
        } else {
          /* Swal.fire(
            "Error",
            "Ha ocurrido un error inesperado en el sistema, vuelva a intentarlo mas tarde",
            "error"
          ); */
        }
      },
    });
  }
}
