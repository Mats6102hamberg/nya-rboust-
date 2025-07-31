// Entry point for all routes
import { Router } from 'express';

const router = Router();

// Example route
router.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

export default router;
import experienceRoutes from './experienceRoutes';
import bookingRoutes from './bookingRoutes';

// Lägg till routes
app.use('/api/experiences', experienceRoutes);
app.use('/api/bookings', bookingRoutes);
