import { Component , inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-otp-verify',
  standalone: true,
  imports: [CommonModule , FormsModule , ],
  templateUrl: './otp-verify.component.html',
  styleUrl: './otp-verify.component.css'
})
export class OtpVerifyComponent {
otp : string = '';
VerificationResult: string = '';
private http = inject(HttpClient);

  verifyOtp() {

  const otpData = {otp : this.otp};
  this.http.post('http://localhost:3000/api/verify-otp' , otpData ).subscribe ( {
     next : (response :any )=>{
    if(response.success){
      this.VerificationResult = 'OTP verified successfully';
    }
       else{
        this.VerificationResult = 'OTP verification failed';
      }
     },
     error : (error) =>{
        this.VerificationResult = 'An error occured while verifying OTP';
        console.error('there was an error !', error);
      },
    });

  }
}
