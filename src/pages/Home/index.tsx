import { useNavigate } from "react-router-dom";
import { Button } from "../../components";
// import { Login } from "../auth";
import { Footer } from "../../components";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="text-center flex-row  items-center justify-center place-items-center bg-cover bg-center"
        style={{ backgroundImage: "url(/src/assets/landing1.png)" }}
      >
        <div>
          <img src="./src/assets/logo.png" alt="" className="p-10" />
        </div>
        <div className="items-center p-10 m-5">
          <p className="text-xl text-white tracking-wider">
            {" "}
            Facilitating Collaboration and knowledge exchange in industry,
            innovations and Infrastructure: Development of a Social Networking
            Platform
          </p>
        </div>
        {/* <div>
                    <img src="/src/assets/landing.png" alt="" className=""/>
                </div> */}
        <div className="mt-20 my-20 p-10 space-x-24 flex flex-row justify-start">
          <Button
            label={"Create Account"}
            onClick={() => navigate("/register")}
            className="bg-green-500 p-3 rounded-md"
          />
          <Button
            label={"Have Account"}
            onClick={() => navigate("/login")}
            className="bg-yellow-500 p-3 rounded-md"
          />
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
