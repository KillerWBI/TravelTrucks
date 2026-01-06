
import Link from "next/link";
import "./home.css";

export default function Home() {



  return (
    <>
      <div className="HomePage">

        <div className="infohome">
          <div>
            <h1 className="homeTexth1">Campers of your dreams</h1>
            <h2 className="homeTexth2">You can find everything you want in our catalog</h2>
          </div>
           <div>
              <Link href="/catalog"><button className="button-go-catalog">View Now</button></Link>
            </div>
        </div>


      </div>
    </>
  )
}
