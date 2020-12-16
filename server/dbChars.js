import mongoose from 'mongoose';


const charSchema = mongoose.Schema(
        {
            
                name: String,
                title: String,
                imgUrl: String,
                vision: String,
                weaponType: String,
                dob: String,
                gender: String,
                rarity: String,
                constellation: String,
                wikiLink: String,
                iconLink: String,
                nation: String
        }
 );

export default mongoose.model( 'Chars', charSchema );
