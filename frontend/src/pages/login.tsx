import Header from "../components/header";
import LoginForm from '../components/login-form';
import Footer from '../components/footer';


export default function Login() {
    return (
        <div className="min-h-screen bg-background">
            <div className="">
                <Header />
                <div className="flex justify-center p-5">
                    <div className="grid items-center bg-login rounded-2xl grid-cols-2">
                        <img src="/images/walpaper.png" alt="" />
                        <div>
                            <LoginForm />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
