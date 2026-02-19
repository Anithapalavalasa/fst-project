// import connection
import db from "../config/database.js";

// get all Foods
export const getFoods = (result) => {
    db.query("SELECT * FROM food", (err,results)=> {
        if (err){
            result(err,null);
            result(err,null);
        }else{
            result(null,results);
        }
    });
};

// get single Foods
export const getFoodById = (id,result) => {
            result(err,null);
        if (err){

            result(err,null);
        }else{
            result(null,results[0]);
        }
    });
};

            result(err,null);
export const insertFood = (data,result) => {
        if (err){
            result(err,null);

            result(err,null);
        }else{
            result(null,results[0]);
        }
    });
            result(err,null);

// update Food
export const updateFoodById = (data,id,result) => {
    db.query("UPDATE food SET food_name = ?, food_price = ? WHERE food_id = ?",[data.food_name, data.food_price, id], (err,results)=> {
        if (err){


        }else{
            result(null,results);

    });
};


// delete Food

            result(err,null);
        if (err){
            // console.log(err);
            result(err,null);
        }else{
            result(null,results);
        }
    });
};