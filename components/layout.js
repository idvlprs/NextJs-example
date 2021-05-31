import Head from "next/head"
import Navigation from "./navigation"



function Layout ({children}){
    return(  
        <div>
            <Head>
                <title>Next Js</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Navigation />
            <main>
                {children}
            </main>
        </div>
    )
}

export default Layout