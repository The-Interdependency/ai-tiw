import { defineMsdmdCollection } from "./.agents/skills/msdmd/collection";

export default defineMsdmdCollection({
  "declarations": [],
  "edges": [],
  "gaps": [
    {
      "file": "repo-wide",
      "missing": [
        "executable modules"
      ],
      "reason": "Content archive with no executable source modules; MODULE_BUILD is required only for new tooling per CLAUDE.md."
    }
  ],
  "repo": "The-Interdependency/ai-tiw"
});
