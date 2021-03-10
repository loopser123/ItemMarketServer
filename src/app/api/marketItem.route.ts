import { Request, Response, Router ,NextFunction} from 'express';
import {asyncRoute} from '../../utils'; 
import MarketItemModel from '../common/models/marketItem.model'; 
import multer from 'multer'; 


const storage = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, 'upload/');
    },
    filename: function(req, file, cb) {
      cb(null, file.originalname + '-' + Date.now());
    }
  });
  const upload = multer({storage:storage}).single("product_image");

async function saveMarketItem(req: Request, res: Response): Promise<void>{
    const marketItemRequest : any = req.body;
    let newMarketItem = new MarketItemModel({
        ...marketItemRequest
    });
    newMarketItem.save().then(doc=>res.json({status : '200'})).catch(err=>console.error(err)); 
}

async function getMarketItems(req: Request, res: Response): Promise<void>{
    // MarketItemModel.find(); 
}


export function marketItemRouter(): Router {
    const router = Router();
    router.post('/',asyncRoute(saveMarketItem));
    router.post('/upload',upload); 
    router.get('/',asyncRoute(getMarketItems)); 
    return router;
  }
  