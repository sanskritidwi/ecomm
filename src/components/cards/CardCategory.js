import React from 'react'



function CardCategory({data}) {
  return (
    <div className='CardLoopWrappper'>
        {
            data.map((item, index)=>{
                return(<>
                <div className="CardCategoryWrapper" key={index}>
                <img src={item.icon} alt="noimg" />
                {item.categoryName}
              </div>
                </>)
                
            })
        }
     
    </div>
  )
}

export default CardCategory
