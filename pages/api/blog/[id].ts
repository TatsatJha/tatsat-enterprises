import type { NextApiRequest, NextApiResponse } from 'next'
import connectDb from "../middleware/mongodb"
import Blog from "../models/blog"


async function handler( req: NextApiRequest, res: NextApiResponse) {
    const {
        query: { id },
        method,
      } = req
    // const getBlog = async ()=>{
    //     let blog = null
    //     try {
    //         blog = Blog.findById(id)
    //         return blog
    //     } catch (error) {
    //         return null
    //     }
    // }
    switch (req.method){
    case "GET":
        try {
            const blog = await Blog.findById(id)
            if(blog === null){res.status(404).json({message:"not found"})}
            res.status(200).json(blog)
        } catch (err){res.status(500)}
        break;
    case "DELETE":
        try {
        const blog = await Blog.findById(id)
        if(blog === null){res.status(404).json({message:"not found"})}
        await Blog.findByIdAndDelete(id)
        res.json(blog)
        } catch (error:any) {res.status(500)}
        break;
    default:
        res.setHeader('Allow', ['GET', 'PUT', 'DELETE'])
        res.status(405).end(`Method ${method} Not Allowed`)      
    }
}
  
export default connectDb(handler)