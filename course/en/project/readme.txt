DESCRIPTION
===========
Place custom scripts that are specific to this topic project here.

If you see the custom scripts being used across multiple projects, then they'll likely need to be made into a core feature (be implemented into the core adapt_v4 project to be available to all future projects).


FOR FRAMEWORK DEVELOPERS
========================
Adapt's core functionality already supports the use of custom scripts; they need to be added inside the src/theme directory.
The reason that we have another level of overrides is due to the way we (Didasko) develop our content. Here's an example of some projects:

- IT08 T1
- IT08 T2
- IT08 T3
- BU04 T1
- BU04 T2
- BU03 T1

To best utilize the Adapt Learning Framework, we don't want to modify its core/less files, as this would cause conflicts when we pull the latest changes from the Adapt 3rd party. As such, all of the global Didasko styles are defined in the src/theme folder, and each of the example projects above need to use that same theme.

However, sometimes a subject needs its own custom functionality. For example, the three IT08 topics above need to have a custom table class. We could add that to src/theme, but that would make the table global to all projects, when we only need it for three. As such, the custom table CSS should be added to this projects folder instead, as the src/course/en folder is unique for each topic we build. This does mean that this folder needs to be copied across for each of the IT08 topics, but due to us only needing the scripts for the one project, this small bit of overhead isn't an issue.

The grunt scripts have been modified in order to accommodate this functionality (Core Adapt functionality did not include scanning the course folder for custom script overrides).