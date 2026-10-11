import {Header} from "./header";
import {Footer} from "./footer";

export function Layout({children}){
    return(
        <div className="min-h-screen flex flex-col">
            <Header/>
            <main className="flex-1 min-h-[60vh] flex flex-col justify-center items-center">
                {children}
            </main>
            <Footer/>
        </div>
    );
}