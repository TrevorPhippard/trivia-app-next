// prisma/seed.js
import { PrismaClient } from '@prisma/client';
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function seed() {
  // Helper function to hash passwords
  async function hashPassword(password: string) {
    const saltRounds = 10;
    return  bcrypt.hashSync(password, saltRounds);
  }

  try {
    // Seed Data
    // ---------------------------------------------------------------------
    // Users
    const hashedPassword = await hashPassword('password123'); // Example password
    const user1 = await prisma.user.upsert({
      where: { email: 'user1@example.com' },
      update: {},
      create: {
        email: 'user1@example.com',
        username: 'user1',
        password: hashedPassword,
      },
    });

    const user2 = await prisma.user.upsert({
      where: { email: 'user2@example.com' },
      update: {},
      create: {
        email: 'user2@example.com',
        username: 'user2',
        password: hashedPassword,
      },
    });

    // UserAccts
    const userAcct1 = await prisma.userAcct.upsert({
      where: { id: 'userAcct1-id' }, // Using a known ID for consistency
      update: {},
      create: {
        id: 'userAcct1-id', // Important to set the id
        UserId: user1.id,
      },
    });

    const userAcct2 = await prisma.userAcct.upsert({
      where: { id: 'userAcct2-id' }, // Using a known ID for consistency
      update: {},
      create: {
        id: 'userAcct2-id', // Important to set the id
        UserId: user2.id,
      },
    });

    // Trivia
    const trivia1 = await prisma.trivia.upsert({
      where: { game_id: 'game123' }, // Assuming game_id is unique
      update: {},
      create: {
        title: 'Trivia Game 1',
        game_id: 'game123',
        bg_img: 'https://flowbite.com/docs/images/blog/image-4.jpg',
        text_colour: '#FFFFFF',
        sliderTime: 30,
        userAcctId: userAcct1.id,
      },
    });

    const trivia2 = await prisma.trivia.upsert({
      where: { game_id: 'game456' }, // Assuming game_id is unique
      update: {},
      create: {
        title: 'Trivia Game 2',
        game_id: 'game456',
        bg_img: 'https://flowbite.com/docs/images/blog/image-4.jpg',
        text_colour: '#000000',
        sliderTime: 45,
        userAcctId: userAcct2.id,
      },
    });

    // Questions
    await prisma.question.upsert({
      where: { id: 'question1-id' },
      update: {},
      create: {
        id: 'question1-id',
        triviaId: trivia1.id,
        order:0,
        bg_img: 'https://flowbite.com/docs/images/blog/image-4.jpg',
        question: 'Question A',
        answer: 'answer.0.text:A,answer.1.text:B,answer.2.text:C,answer.3.text:D',
      },
    });

    await prisma.question.upsert({
      where: { id: 'question2-id' },
      update: {},
      create: {
        id: 'question2-id',
        triviaId: trivia1.id,
        order:1,
        bg_img: 'https://flowbite.com/docs/images/blog/image-4.jpg',
        question: 'Question 1',
        answer: 'answer.0.text:E,answer.1.text:F,answer.2.text:G,answer.3.text:H',
      },
    });

    await prisma.question.upsert({
      where: { id: 'question3-id' },
      update: {},
      create: {
        id: 'question3-id',
        triviaId: trivia2.id,
        order:2,
        bg_img: 'https://flowbite.com/docs/images/blog/image-4.jpg',
        question: 'Question 1',
        answer: 'answer.0.text:I,answer.1.text:J,answer.2.text:K,answer.3.text:L',
      },
    });

    // Rooms
    const room1 = await prisma.room.upsert({
      where: { id: 'room1-id' },
      update: {},
      create: {
        id: 'room1-id',
        name: 'Room 1',
      },
    });

    // Messages
    await prisma.message.upsert({
      where: { id: 'message1-id' },
      update: {},
      create: {
        id: 'message1-id',
        roomId: room1.id,
        userAcctId: userAcct1.id,
        content: 'Hello from user1!',
      },
    });

    await prisma.message.upsert({
      where: { id: 'message2-id' },
      update: {},
      create: {
        id: 'message2-id',
        roomId: room1.id,
        userAcctId: userAcct2.id,
        content: 'Hi user1!',
      },
    });

    // Log success
    console.log('Seeding completed successfully!');

  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1); // Exit with an error code
  } finally {
    await prisma.$disconnect();
  }
}

seed();