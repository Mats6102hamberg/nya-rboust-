import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

// GET /api/experiences - Hämta alla upplevelser
router.get('/', async (req, res) => {
  try {
    const experiences = await prisma.experience.findMany({
      include: {
        availableDates: {
          where: {
            isActive: true,
            date: {
              gte: new Date()
            }
          }
        }
      }
    });
    res.json(experiences);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch experiences' });
  }
});

// GET /api/experiences/:id - Hämta specifik upplevelse
router.get('/:id', async (req, res) => {
  try {
    const experience = await prisma.experience.findUnique({
      where: { id: parseInt(req.params.id) },
      include: {
        availableDates: {
          where: {
            isActive: true,
            date: {
              gte: new Date()
            }
          }
        }
      }
    });
    
    if (!experience) {
      return res.status(404).json({ error: 'Experience not found' });
    }
    
    res.json(experience);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch experience' });
  }
});

export default router;
