import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

export const main = async () => {
    const newFeedBack = await prisma.link.createMany({
        data: [
            {
              title: 'Lovely app',
              description: 'FEEDBACK',
              url: 'mahmoud@prisma.io',
              category: 'Mahmoud',
              imageUrl: ""
            },
            {
              title: 'Add dark mode',
              description: 'IDEA',
              url: 'dan@prisma.io',
              category: 'Dan',
              imageUrl: ""
            },
            {
              title: 'layout is broken on mobile',
              description: 'ISSUE',
              url: 'alex@prisma.io',
              category: 'Alex',
              imageUrl: ""
            },
          ],
    })
}

// Won't work if the main function is not called lol
main()
.catch((e) => {
    console.error(e);
    process.exit(1);
  })
.finally(async () => await prisma.$disconnect);