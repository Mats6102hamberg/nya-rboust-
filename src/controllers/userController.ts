import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Skapa användare
export const createUser = async (req: Request, res: Response) => {
  try {
    const { email, name } = req.body;
    const user = await prisma.user.create({
      data: { email, name },
    });
    res.status(201).json(user);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

// Hämta alla användare
export const getUsers = async (_req: Request, res: Response) => {
  const users = await prisma.user.findMany();
  res.json(users);
};

// Hämta en användare
export const getUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await prisma.user.findUnique({ where: { id: Number(id) } });
  if (user) res.json(user);
  else res.status(404).json({ error: 'User not found' });
};

// Uppdatera användare
export const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { email, name } = req.body;
    const user = await prisma.user.update({
      where: { id: Number(id) },
      data: { email, name },
    });
    res.json(user);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

// Ta bort användare
export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await prisma.user.delete({ where: { id: Number(id) } });
    res.status(204).send();
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};
