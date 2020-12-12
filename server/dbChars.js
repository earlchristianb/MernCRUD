import mongoose from 'mongoose';


const charSchema = mongoose.Schema(
        {
                id: String,
                name: String,
                title: String,
                imgUrl: String,
                vision: String,
                weaponType: String,
                dob: String,
                gender: String,
                rarity: String,
                constellation: String,
                wikiLink: String
        }
 );

export default mongoose.model( 'Chars', charSchema );
