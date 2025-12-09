const express = require('express');
const app = express();
const port = 3000;


function V_Product_id(req,res,next) {
    const p_id =parseInt(req.params.p_id);    
    if (isNaN(p_id) || p_id <=0) {
        return res.status(400).json({ success: false, error: 'Invalid product ID' })
    }
    
}

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
