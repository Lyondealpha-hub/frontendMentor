import Navbar from "./Nav";

  const Login = () => {
    return (<>

    <Navbar />
    <main>

      <div className="w-full h-[657px] bg-yellow-500 pt-20">
        <div className="w-[50%]  justify-center bg-purple-400 h-[60%] m-auto  ">

         <h1 className="text-center text-[30px] font-bold"> Login</h1>
         <hr/>
         <div className="w-full ml-[280px] mt-[20px] ">
          <label className="block " >UserName or Email</label>
          <input type="w-[80px]" placeholder="email"/>
          <label className="block">Password</label>
          <input type="password" placeholder="email"/>

          </div>

          <a href="#">Forget Password</a>

          
        
      </div>
      </div>
    </main>
    </>);
  };
  export default Login;
  
