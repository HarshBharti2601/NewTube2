import { db } from "@/db";
import { categories } from "@/db/schema";

//todo:create a script to seed categories
const categoryNames =[
    "Car and Vehicles",
    "Comedy",
    "Education",
    "Gaming",
    "Entertainment",
    "Film and Animation",
    "How-to-and style",
    "Music",
    "News and politics",
    "People and blogs",
    "Pets and Animals",
    "Science and Technology",
    "Sports", 
    "Travel and Events",
];

async function main() {
    console.log("Seeding categories...");
    try {
       const values =  categoryNames.map((name)=>({
        name,
        description:`Videos related to ${name.toLowerCase()}`,
       }));
       await db.insert(categories).values(values); 
    } catch (error) {
       console.error("Error seeding categories:",error);
       process.exit(1); 
    }
}

main();
