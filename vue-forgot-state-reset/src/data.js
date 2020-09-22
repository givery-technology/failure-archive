const Organizations = [
  { id: 1, name: "Organization A" },
  { id: 2, name: "Organization B" },
];
const Projects = [
  { id: 1, organizationId: 1, name: "A: Project 01" },
  { id: 2, organizationId: 2, name: "B: Project 01" },
  { id: 3, organizationId: 2, name: "B: Project 02" },
  { id: 4, organizationId: 1, name: "A: Project 02" },
  { id: 5, organizationId: 1, name: "A: Project 03" },
];
const ProjectMembers = [
  { id:  1, organizationId: 1, projectId: 1, email: "org-a.member-01@example.com" },
  { id:  2, organizationId: 1, projectId: 1, email: "org-a.member-02@example.com" },
  { id:  3, organizationId: 1, projectId: 1, email: "org-a.member-03@example.com" },
  { id:  4, organizationId: 1, projectId: 1, email: "org-a.member-04@example.com" },
  { id:  5, organizationId: 1, projectId: 4, email: "org-a.member-01@example.com" },
  { id:  6, organizationId: 1, projectId: 4, email: "org-a.member-05@example.com" },
  { id:  7, organizationId: 1, projectId: 4, email: "org-a.member-03@example.com" },
  { id:  8, organizationId: 1, projectId: 4, email: "org-a.member-06@example.com" },
  { id:  9, organizationId: 1, projectId: 5, email: "org-a.member-01@example.com" },
  { id: 10, organizationId: 1, projectId: 5, email: "org-a.member-02@example.com" },
  { id: 11, organizationId: 1, projectId: 5, email: "org-a.member-03@example.com" },
  { id: 12, organizationId: 1, projectId: 5, email: "org-a.member-05@example.com" },
  { id: 13, organizationId: 2, projectId: 2, email: "org-b.member01@example.com " },
  { id: 14, organizationId: 2, projectId: 2, email: "org-b.member02@example.com " },
  { id: 15, organizationId: 2, projectId: 2, email: "org-b.member03@example.com " },
  { id: 16, organizationId: 2, projectId: 2, email: "org-b.member04@example.com " },
  { id: 17, organizationId: 2, projectId: 3, email: "org-b.member05@example.com " },
  { id: 18, organizationId: 2, projectId: 3, email: "org-b.member02@example.com " },
  { id: 19, organizationId: 2, projectId: 3, email: "org-b.member03@example.com " },
  { id: 20, organizationId: 2, projectId: 3, email: "org-b.member06@example.com " },
];
export {
  Organizations,
  Projects,
  ProjectMembers,
}
