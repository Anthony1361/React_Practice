import logo from './logo.svg';
import './App.css';
import styledbutton from './components/styling/Buttonsty';
import Example1 from './components/Example1';
import Example2 from './components/Example2';
import Ass1 from './components/Ass1';
import Ass2 from './components/Ass2';
import Stateinclass from './components/Stateinclass';
import Dissprop2 from './components/Dissprop2';

import Paretcomponent from './components/Paretcomponent';
import Stylecom1 from './components/styling/Stylecom1';
import Stylecomexternal from './components/styling/Stylecomexternal';
import Bootstrap from './components/Bootstrap';
import Coutersetstate from './components/Coutersetstate';
import Eventhand from './components/Eventhand';
import Eventhand2 from './components/Evenhand2';
import Eventbind from './components/Eventbind';
import Methodpropsparent from './components/Methodpropsparent';
import Ifelsecon from './components/Ifelsecon';
import Listrender from './components/Listrender';
import './cssmodule.css';
import styl from './css.module.css';
import Formhand from './components/Formhand';
import LifecycleM from './components/LifecycleM';
import LifecycleUp from './components/LifecycleUp';
import Errorhanmethod from './components/Errorhanmethod';
import Errorboundary from './components/Errorboundary';

import { Routes,Route } from 'react-router-dom';
import { AuthProvider } from './components/Authprofile';
import { Login } from './components/Login';
import { Home } from './components/Home';
import { About } from './components/About';
import { Navbar } from './components/Navbar';
import { Ordersummary } from './components/Ordersummary';
import { Nomatchroutes } from './components/Nomatchroutes';
import { Products } from './components/Products';
import { Featuredpro } from './components/Featuredpro';
import { Newpro } from './components/Newpro';
import { Dynamicroutes } from './components/Dynamicroutes';
import { Dynamicuserid } from './components/Dynamicuserid';
import { Dynamicadmin } from './components/Dynamicadmin';
import { Services } from './components/Services';
import { Profile } from './components/Profile';
import { Spa } from './components/Spa';
import { Massage } from './components/Massage';
import { Hotbath } from './components/Hotbath';
import Stateinfunction from './components/Stateinfunction';
import Dissprop from './components/Dissprop';

// const styledButton = styled.button`
// font-size: larger;
// font-weight: lighter;
// color: white;
// background:blue;
// padding: 10px;
// `


function App() {

    return(
      <div>
        <>
            {/* <AuthProvider>
            <Navbar></Navbar>

            <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='About' element={<About></About>}></Route>
            <Route path='Order' element={<Ordersummary></Ordersummary>}></Route>
            <Route path='*' element={<Nomatchroutes></Nomatchroutes>}></Route>
            <Route path='Profile' element={<Profile></Profile>}></Route>
            <Route path='Login' element={<Login></Login>}></Route>

            <Route path='Products' element={<Products></Products>}>
              <Route index element={<Featuredpro></Featuredpro>}></Route>
              <Route path='Featured' element={<Featuredpro></Featuredpro>}></Route>
              <Route path='New' element={<Newpro></Newpro>}></Route>
            </Route>

            <Route path='Users' element={<Dynamicroutes></Dynamicroutes>}>
              <Route path=':userId' element={<Dynamicuserid></Dynamicuserid>}></Route>
              <Route path='admin' element={<Dynamicadmin></Dynamicadmin>}></Route>
            </Route> 

            <Route path='Users' element={<Dynamicroutes></Dynamicroutes>}></Route> 
            <Route path='users/:userid' element={<Dynamicuserid></Dynamicuserid>}></Route>
            <Route path='users/admin' element={<Dynamicadmin></Dynamicadmin>}></Route>

            <Route path='users/1' element={<Dynamicuserid></Dynamicuserid>}></Route>
            <Route path='users/2' element={<Dynamicuserid></Dynamicuserid>}></Route>
            <Route path='users/3' element={<Dynamicuserid></Dynamicuserid>}></Route>
            <Route path='services' element={<Services></Services>}>
              <Route path='spa' element={<Spa></Spa>}></Route>
            </Route>
            <Route path='spa' element={<Spa></Spa>}></Route>

            <Route path='Massage' element={<Massage></Massage>}></Route>
            <Route path='Hotbath' element={<Hotbath></Hotbath>}></Route>

            </Routes>
            </AuthProvider> */}

            <Navbar></Navbar>
            <Routes>
              <Route path='/' element={<Home></Home>}></Route>
              <Route path='about' element={<About></About>}></Route>
              <Route path='Order' element={<Ordersummary></Ordersummary>}></Route>

              <Route path='Products' element={<Products></Products>}>
                  {/* this index is to display featuredpro when on Product page by default instead of waiting to be clicked */}
                <Route index element={<Featuredpro></Featuredpro>}></Route>
                <Route path='Featured' element={<Featuredpro></Featuredpro>}></Route>
                <Route path='New' element={<Newpro></Newpro>}></Route>
              </Route>

              <Route path='Users' element={<Dynamicroutes></Dynamicroutes>}>
                {/* this :userid is recommended instead of users/1 etc, just in case u have over Hundred users */}
                <Route path=':userId' element={<Dynamicuserid></Dynamicuserid>}></Route>
                <Route path='admin' element={<Dynamicadmin></Dynamicadmin>}></Route>
             </Route> 

             <Route path='Profile' element={<Profile></Profile>}></Route>
             <Route path='Login' element={<Login></Login>}></Route>

             <Route path='services' element={<Services></Services>}>
              <Route path='spa' element={<Spa></Spa>}></Route>
            </Route>

            {/* <Route path='spa' element={<Spa></Spa>}></Route>  */}

            <Route path='Massage' element={<Massage></Massage>}></Route>
            <Route path='Hotbath' element={<Hotbath></Hotbath>}></Route>

           </Routes>
        </>  
      </div>
    )

  //  return (

    // <div className="App">

      {/* <button>Button</button>
      <styledbutton>styledbutton</styledbutton> */}

      {/* <Errorboundary>
      <Errorhanmethod heroName={"batman"}></Errorhanmethod>
      </Errorboundary>

      <Errorboundary>
      <Errorhanmethod heroName={"superman"}></Errorhanmethod>
      </Errorboundary>

      <Errorboundary>
      <Errorhanmethod heroName={"joker"}></Errorhanmethod>
      </Errorboundary> */}

      {/* <Errorboundary>
      <Errorhanmethod heroName={"batman"}></Errorhanmethod>
      <Errorhanmethod heroName={"superman"}></Errorhanmethod>
      <Errorhanmethod heroName={"joker"}></Errorhanmethod>
      </Errorboundary> */}

      {/* <Errorhanmethod heroName={"batman"}></Errorhanmethod>
      <Errorhanmethod heroName={"superman"}></Errorhanmethod>
      <Errorhanmethod heroName={"joker"}></Errorhanmethod> */}

      {/* <LifecycleM></LifecycleM> */}

      {/* <LifecycleUp></LifecycleUp>  */}

      {/* <Formhand></Formhand> */}


      {/* <h1 className='error'>error</h1>
      <h1 className={styl.success} >success</h1> */}

        {/* <Example1></Example1> */}
        {/* <Example2></Example2>  */}

        {/* <Ass2></Ass2>
        <Ass1></Ass1> */}

        {/* <Ass1 name = "first props" add = "added prop"> <p>This is a child props</p> </Ass1>
        <Ass1 name = "second props" add = "added property"> <button type='submit'>Action</button> </Ass1>
        <Ass1 name = "third props" add = "added properties"></Ass1> */}

        {/* <Ass2 name = "first props" add = "added prop"></Ass2> 
        <Ass2 name = "second props" add = "added property"></Ass2> 
        <Ass2 name = "third props" add = "added properties"></Ass2>  */}

        {/* <Stateinclass></Stateinclass> */}
        {/* <Stateinfunction></Stateinfunction> */}

        {/* <Dissprop name = 'Bruce' add = 'Wayne'></Dissprop>  */}
         {/* <Dissprop2 name = "second props" add = "added property"></Dissprop2>  */}

        {/* <Paretcomponent></Paretcomponent>  */}

        {/* <Stylecom1></Stylecom1>
        <Stylecomexternal></Stylecomexternal> */}

        {/* <Bootstrap></Bootstrap> */}

        {/* <Coutersetstate></Coutersetstate> */}

         {/* <Eventhand></Eventhand> */}
        {/* <Eventhand2></Eventhand2> */}
        {/* <Eventbind></Eventbind>  */}

        {/* <Methodpropsparent></Methodpropsparent> */}

        {/* <Ifelsecon></Ifelsecon> */}
        {/* <Listrender></Listrender> */}


    {/* </div> */}
  // );
}

export default App;


