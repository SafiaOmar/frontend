import React from "react";
import "./Home.css";
import "./Product";
import Product from "./Product";

function Home() {
    return (
        
        <div className="home">
            <h1> LOCALLY MADE GLOBALLY KNOWN!!!🥥🫒🍍</h1>
           <div className="home_container">
            <img className="home_image"
            src="https://images.unsplash.com/photo-1488459716781-31db52582fe9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" 
            alt=""
        />
        
        <div  className="home_row">
            <Product 
            id="123456"
            title='Dashiki Shirt' 
            price={19.99} 
            image="https://m.media-amazon.com/images/I/91sMB6Ob+CL._AC_UY445_.jpg" />

            <Product
              id="44444656"
              title='Morrocon cooking pot' 
              price={20.99} 
              image="https://ii.worldmarket.com/fcgi-bin/iipsrv.fcgi?FIF=/images/worldmarket/source/61299_XXX_v1.tif&wid=480&cvt=jpeg"  />
              </div>
            
              <div  className="home_row">
              <Product 
                id="26554556"
                title='African Tea pot' 
                price={12.99} 
                image="https://secure.img1-ag.wfcdn.com/im/00961875/resize-h445%5Ecompr-r85/5438/54389589/Brookhill+Steel+Dotted+Asian+0.84+-qt.+Cast+Iron+Teapot.jpg" />
            <Product 
            id="100000236"
            title='Mabuyu (oragnic Baobab)' 
            price={10.99} 
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRASjmj3pdx_uYwE4riGDX9dLkf7bcpsAQtUL_ipEwXW5Cs_Ep0hhFW-1Ttwk-m4EJX7uc&usqp=CAU" />
            <Product
            id="084561231"
            title='African Black Soap' 
            price={5.99} 
            image="https://cdn.shopify.com/s/files/1/0041/0471/6386/products/S077OriginalUnscented_300x300.jpg?v=1614200831"  />
              </div> 
            
              <div  className="home_row">
              <Product 
              id="4545464646"
              title='African Women Shoes' 
              price={100.99} 
              image="https://sokojanja.com/3482-deal_home_default/woven-sling-bag.jpg"/>
              </div>
        </div>
        </div>
    )
}

export default Home
