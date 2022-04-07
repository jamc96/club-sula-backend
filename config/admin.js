module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'd790239f64ab18135b03457908277995'),
  },
});
