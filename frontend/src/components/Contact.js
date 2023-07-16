import React, { Component } from 'react'
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const regExp = RegExp(
    /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
)



export default class Contact extends Component {
    constructor(props){
        super(props)
        this.state = {
            name : '',
            email : '',
            message : '',
            buttonEnable : true,
            isError : {
                name : '',
                email : '',
                message : '',
            }
        }
    }



    onSubmit = (e) => {
        e.preventDefault();
        const { name , email , message} = this.state;
        const {isError} = this.state;

        if(name === ''){
            isError.name =  `Required*`;
        }
        else if(email === ''){
            isError.email =  `Required*`;
        }
        else if(message === ''){
            isError.message =  `Required*`;
        }
        else if(isError.name === '' && isError.message === '' && isError.email === ''){

            emailjs.sendForm('service_wrzp07k', 'template_bat0fpi', e.target, 'qf0tQlbv-8pXwzscF')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

            toast.success("Successfully mail sent, will connect as soon as possible");
            this.setState({
                name : '',
                email : '',
                message :''
            })
        }
        else{
            console.log("mail not send");
            toast.error("Something went wrong! try again")
        }


      
        this.setState({
            isError 
        })
    }

  
    formValChange = (e) =>{
        const { name , value} = e.target;
        let isError = { ...this.state.isError };
       
        switch (name) {
            case "name":
                isError.name = value.length < 3 ? "Atleast 3 charactors required" 
                : value.length < 0 ? "Required" 
                : "" ;
                break;
            case "email":
                isError.email = regExp.test(value) ? "" 
                : value.length < 0 ? "Required"
                : "Email address is invalid";
                break;
            case "message":
                isError.message = value.length < 20 ? "Atleast 20 charactors required" 
                : value.length < 0 ? "Required"
                : "";
                break;
            default:
                break;
        }

        this.setState({
            isError , [name] : value
        })

    }

  render() {
      const {isError} = this.state;
    return (
        <div className='contactSection' id='contact' >
            <div className='container'>
            <h1>Get In Touch</h1>
            <p>Got a question or proposal, or just want to say hello? Go ahead.</p>
            <form className='formSection' onSubmit={this.onSubmit} noValidate>
                <div className='formGroup'>
                    <label>Your Name</label>
                    <input type="text" name='name' value={this.state.name} autoComplete='off' placeholder="Enter your name" required={true}  onChange={this.formValChange}/>
                    {
                        isError.name.length > 0 ? <span >{isError.name}</span> : ""
                    }
                </div>
                <div className='formGroup'>
                    <label>Email Address</label>
                    <input type="text" name='email' value={this.state.email} autoComplete='off' placeholder="Enter your Email Address" required={true} onChange={this.formValChange}/>
                    {
                        isError.email.length > 0 ? <span>{isError.email}</span> : ""
                    }
                </div>
                <div className='formGroup fullwidth'>
                    <label>Your Message</label>
                    <textarea type="text" name='message' value={this.state.message} autoComplete='off' placeholder="Hi, I think we need a design system for our products at Company X. How soon can you hope on to discuss this?" onChange={this.formValChange}></textarea>
                    {
                        isError.message.length > 0 ? <span>{isError.message}</span> : ""
                    }
                </div>
                <div className='formGroup fullwidth'>
                    <button type='submit' className={!this.state.buttonEnable ? `disable` : ``}>Send Message</button>
                </div>
            </form>
            </div>
        </div>
    )
  }
}
