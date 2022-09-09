import React from "react";
import { Link } from "react-router-dom"
import useMessage from "../../Hooks/useMessage";

export default function LandingPage() {

  const { message, removeMessage } = useMessage()

    return (
        <div className="App">
      
      <p>{message}</p>
      <div className="HomeHeader">
        <h1>Welcome to the Members Only Area!</h1>
      </div>
      <div className="HomeBody">
        <p>
          Hi Pearl and Margaret!! I hope you like this little app I built for the very cool art community 
          you all have started. I put this version online with most of the functionality/styling built out but I 
          want to iterate on it with you two and in our community so we have something really great!
        </p>
        <p>
          Stumptown kombucha squid art party enamel pin, skateboard
          intelligentsia celiac 3 wolf moon poutine plaid narwhal. Occupy
          knausgaard fashion axe, microdosing mustache letterpress cray quinoa
          heirloom. Asymmetrical cred everyday carry authentic venmo, whatever
          beard vape. Mixtape mlkshk venmo pickled 90's. Succulents man bun
          irony viral taxidermy actually cliche skateboard post-ironic.
          Fingerstache trust fund salvia, chillwave franzen keytar snackwave
          artisan tumblr jean shorts knausgaard street art live-edge
          williamsburg. VHS brooklyn copper mug blue bottle paleo fanny pack.
        </p>
        <p>
          Cred kitsch portland shaman, unicorn franzen iceland yr bushwick
          gentrify ugh tilde succulents. Lo-fi sriracha YOLO, edison bulb pop-up
          hoodie schlitz raclette bitters. Tote bag offal skateboard tilde.
          Kinfolk kogi bitters, chillwave try-hard truffaut sustainable twee
          chambray. Tumeric farm-to-table cred, drinking vinegar blue bottle
          twee yes plz shabby chic 8-bit.
        </p>
        <p>Dummy text? More like dummy thicc text, amirite?</p>
      </div>
      <nav>
        <Link to="/login">Login</Link> | <Link onClick={removeMessage} to="/register">New User</Link>
      </nav>
    </div>
    )
}