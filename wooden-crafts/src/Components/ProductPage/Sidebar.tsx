import { useSearchParams } from "react-router-dom"
import "./Sidebar.css"
import {useState,useEffect} from "react"



const Sidebar=()=>{
    const [search,setSearch]=useSearchParams([])
    let initOrder=search.get("order")
    let [order,setOrder]=useState(""||initOrder)
    let initPrice=search.getAll("price")
    const [priceRange, setPriceRange] = useState<string[]>([]);
    let initMa=search.getAll("material")
    let [material,setMaterial]=useState<string[]>(initMa||[])
    let initColor=search.getAll("color")
    let [color,setColor]=useState<string[]>(initColor||[])
    let initBrand=search.getAll("brand")
    let [brand,setBrand]=useState<string[]>(initBrand||[])

    const HandleChange=(e:any)=>{
        setOrder(e.target.value)
    }

    const handlePriceRange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        let newPriceRange = [...priceRange];
        if (newPriceRange.includes(value)) {
          newPriceRange = newPriceRange.filter((ele) => ele !== value);
        } else {
          newPriceRange.push(value);
        }
        setPriceRange(newPriceRange);
      };
    
    let HandelMa=(e:React.ChangeEvent<HTMLInputElement>)=>{
        let {value}=e.target
        let newMaterial=[...material]
        if(newMaterial.includes(value)){
                newMaterial=newMaterial.filter((ele)=>ele!==value)
        }
        else {
            newMaterial.push(value)
        }
        setMaterial(newMaterial)
    }
  
    let Handelcolor=(e:React.ChangeEvent<HTMLInputElement>)=>{
        let {value}=e.target
        let newColor=[...color]
        if(newColor.includes(value)){
            newColor=newColor.filter((ele)=>ele!==value)
        }
        else {
            newColor.push(value)
        }
        setColor(newColor)
    }

    const HandleBrand=(e:React.ChangeEvent<HTMLInputElement>)=>{
        let {value}=e.target;
        let newBrand=[...brand];
        if(newBrand.includes(value)){
            newBrand=newBrand.filter((ele)=>ele!==value)
        }
        else{
            newBrand.push(value)
        }
        setBrand(newBrand)
    }

    useEffect(()=>{
        let params:any={
            material,
            color,
            brand,
            price: priceRange,
        }

        order && (params.order=order)
        setSearch(params)
    },[order,material,color,brand,priceRange])

   
      
    return (
        <div className="Product_container">
            <h2 style={{padding:"10px"}}>Sort by</h2>
            <hr />
            

            <div onChange={HandleChange}>
            <label  htmlFor="">
                <input  type="radio" value={"asc"} name="order" defaultChecked={initOrder=="asc"}/>
                Price (Low to High) </label>
                <label style={{marginRight:'-30px'}} >
                <input type="radio" value={"desc"} name="order" defaultChecked={initOrder=="desc"}/>
               
               Price (High to Low)</label>
            </div>
            <br />
            
            <hr />
            <h2  style={{padding:"10px"}}>Filter</h2>
            <hr />
            <br />
            {/* <h2>PRICE RANGE</h2>
            <br />
            <div>
                <label >
                <input type="checkbox" value="19,999"></input> 
                Under ₹ 19,999
                </label>
            </div>
            <div>
                <input type="checkbox" value="20,000 - 29,999" /> 
                <label >₹ 20,000 - ₹ 29,999</label>
            </div>
            <div>
                <input type="checkbox" value="30,000 - 39,999"/> 
                <label >₹ 30,000 - ₹ 39,999</label>
            </div>
            <div>
                <input type="checkbox" value="40,000 - 49,999"/> 
                <label >₹ 40,000 - ₹ 49,999</label>
            </div>
            <div>
                <input type="checkbox" value="50,000+"/> 
                <label >Over ₹ 50,000</label>
            </div>
            <br />
            <hr /> */}
            <br />
            <h2>MATERIAL</h2>
            <br />
            <div>
                <input type="checkbox" value={"Velvet"} checked={material.includes("Velvet")} onChange={HandelMa}/> 
                <label >Velvet</label>
            </div>
            <div>
                <input type="checkbox" value={"Cotton"} checked={material.includes("Cotton")} onChange={HandelMa}/> 
                <label >Cotton</label>
            </div>
            <div>
                <input type="checkbox" value={"Leather"} checked={material.includes("Leather")} onChange={HandelMa}/> 
                <label >Leather</label>
            </div>
            <br />
            <hr />
            <br />
            <h2>COLOR</h2>
            <br />
            <div style={{position:"relative",top:"33px"}}>
                <input style={{marginRight:"11px"}} type="checkbox" value={"Cream"} onChange={Handelcolor} checked={color.includes("Cream")}/> 
                <span style={{position:"relative",left:"31px",bottom:"20px"}}><img src="https://images.woodenstreet.de/image/data/color_group_name/CREAM.jpg" style={{width:"15px",borderRadius:"50%"}}/></span>
                <label style={{position:"relative",left:"50px",bottom:"40px"}}>Cream</label>
            </div>
            <div>
                <input type="checkbox" value={"Grey"} onChange={Handelcolor} checked={color.includes("Grey")}/> 
                <span style={{position:"relative",left:"30px",bottom:"20px"}}><img src="https://images.woodenstreet.de/image/data/color_group_name/grey.jpg" style={{width:"15px",borderRadius:"50%"}}/></span>
                <label style={{position:"relative",left:"50px",bottom:"40px"}}>Grey</label>
            </div>
            <div style={{position:"relative",bottom:"35px",left:"1px"}}>
                <input type="checkbox" value={"Blue"} onChange={Handelcolor} checked={color.includes("Blue")}/> 
                <span style={{position:"relative",left:"30px",bottom:"20px"}}><img src="https://images.woodenstreet.de/image/data/color_group_name/BLUE.jpg" style={{width:"15px",borderRadius:"50%"}}/></span>
                <label style={{position:"relative",left:"50px",bottom:"40px"}}>Blue</label>
            </div>
            <br />
            <hr />
            <br />
            <h2>BRAND</h2>
            <br />
            <div>
                <input type="checkbox" value={"Wooden Street"} onChange={HandleBrand} checked={brand.includes("Wooden Street")}/> 
                <label >Wooden Street</label>
            </div>
            <div>
                <input type="checkbox" value={"Urban Living"} onChange={HandleBrand} checked={brand.includes("Urban Living")}/> 
                <label >Urban Living</label>
            </div>
            <div>
                <input type="checkbox" value={"Arra"} onChange={HandleBrand} checked={brand.includes("Arra")}/> 
                <label >Arra</label>
            </div>
            <div style={{marginBottom:"15px"}}>
                <input type="checkbox" value={"Spacewood"} onChange={HandleBrand} checked={brand.includes("Spacewood")}/> 
                <label >Spacewood</label>
            </div>
        </div>
    )

}

export default Sidebar