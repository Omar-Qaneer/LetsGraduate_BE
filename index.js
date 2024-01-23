const express = require("express");
const sequelize = require("./config/database");
const cors = require("cors");
const prerequisitesRoutes = require("./routes/prerequisites");
const partnershipsRoutes = require("./routes/partnerships");
const studentsRoutes = require("./routes/students");
const doctorsRoutes = require("./routes/doctors");
const projectsRoutes = require("./routes/projects");
const findPartnersRoutes1 = require("./routes/student/findgroups");
const findPartnersRoutes2 = require("./routes/student/find_students_without_groups");
const chooseSupervisorRoutes = require("./routes/student/findsupervisors");
const fetchAbstractRoutes = require("./routes/student/findabstract");
const abstractCommentstRoutes = require("./routes/student/abstract_comments");
const createNotificationRoutes = require("./routes/student/create_notification");
const viewNotificationsRoutes = require("./routes/student/view_notifications");

const app = express();
app.use(cors());

// Database connection
sequelize
  .sync()
  .then(() => {
    console.log("Database connected");
  })
  .catch((error) => {
    console.error("Database connection error:", error);
  });

// Middlewares
app.use(express.json());

// Routes
app.use("/prerequisites", prerequisitesRoutes);
app.use("/partnerships", partnershipsRoutes);
app.use("/students", studentsRoutes);
app.use("/doctors", doctorsRoutes);
app.use("/projects", projectsRoutes);
app.use("/findPartners1", findPartnersRoutes1);
app.use("/findPartners2", findPartnersRoutes2);
app.use("/chooseSupervisor", chooseSupervisorRoutes);
app.use("/submission", fetchAbstractRoutes);
app.use("/abstractComments", abstractCommentstRoutes);
app.use("/createNotification", createNotificationRoutes);
app.use("/viewNotifications", viewNotificationsRoutes);

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
