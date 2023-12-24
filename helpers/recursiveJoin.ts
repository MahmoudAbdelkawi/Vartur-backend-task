import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()
const Categories = prisma.category

const getCategoriesWithChildren = async (parentId: number | null) => {
    const categories : any = await Categories.findMany({
        include: {
            _count: true,
        },
        where: {
            published: true,
            parent_id: parentId
        }
    });

    
    for (const category of categories) {
        const grandchildren = await getCategoriesWithChildren(category.id);
        category.children = grandchildren; 
        
    }

    return categories;
};

export {getCategoriesWithChildren}