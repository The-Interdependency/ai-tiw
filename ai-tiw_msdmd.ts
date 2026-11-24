import { defineMsdmdCollectionV2 } from "./.agents/skills/msdmd/collection";

export default defineMsdmdCollectionV2({
  "capabilities": [
    "native-facts",
    "supplemental-msdmd-blocks",
    "source-qualified-identities",
    "duplicate-id-diagnostics",
    "discovery-accounting"
  ],
  "conflicts": [],
  "coverage": {
    "block_adoption": {
      "BOUNDARIES": 0,
      "CAPABILITIES": 0,
      "CHECKS": 0,
      "CONTRACTS": 0,
      "DEPENDENCIES": 0,
      "DOCS": 0,
      "FRONTEND_META": 0,
      "LLMS": 0,
      "MODULE_BUILD": 0,
      "OWNERS": 0
    },
    "denominator": {
      "count": 21,
      "kind": "discovered-files"
    },
    "excluded_files": 0,
    "excluded_subtrees": 13,
    "information_availability": "not-evaluated-without-obligation-policy",
    "invalid_files": 0,
    "native_facts": 10,
    "partial_files": 1,
    "required_sources": [],
    "supplemental_declarations": 0,
    "supported_files": 18,
    "unreadable_files": 0,
    "unsupported_files": 2,
    "verified_behavior": "not-evaluated"
  },
  "declarations": [],
  "diagnostics": [
    {
      "code": "unrecognized_license_text",
      "message": "license identifier remains hmmm",
      "reader_id": "license-text",
      "severity": "warning",
      "source": {
        "content_sha256": "9ba9550ad48438d0836ddab3da480b3b69ffa0aac7b7878b5a0039e7ab429411",
        "file": "LICENSE",
        "location": {
          "pointer": "document"
        },
        "repository": "The-Interdependency/ai-tiw",
        "revision": "snapshot:263d5ac1b08c8308b74918b034d0822763edca987511da826881978dcf33cddf"
      },
      "status": "ambiguous"
    }
  ],
  "discovery": [
    {
      "content_sha256": "hmmm",
      "entry_kind": "subtree",
      "file": "**/.agents/**",
      "reader_ids": [],
      "reason": "configured-subtree",
      "status": "excluded"
    },
    {
      "content_sha256": "hmmm",
      "entry_kind": "subtree",
      "file": "**/.git/**",
      "reader_ids": [],
      "reason": "configured-subtree",
      "status": "excluded"
    },
    {
      "content_sha256": "hmmm",
      "entry_kind": "subtree",
      "file": "**/.mypy_cache/**",
      "reader_ids": [],
      "reason": "configured-subtree",
      "status": "excluded"
    },
    {
      "content_sha256": "hmmm",
      "entry_kind": "subtree",
      "file": "**/.pytest_cache/**",
      "reader_ids": [],
      "reason": "configured-subtree",
      "status": "excluded"
    },
    {
      "content_sha256": "hmmm",
      "entry_kind": "subtree",
      "file": "**/.skill-lib/**",
      "reader_ids": [],
      "reason": "configured-subtree",
      "status": "excluded"
    },
    {
      "content_sha256": "hmmm",
      "entry_kind": "subtree",
      "file": "**/.tox/**",
      "reader_ids": [],
      "reason": "configured-subtree",
      "status": "excluded"
    },
    {
      "content_sha256": "hmmm",
      "entry_kind": "subtree",
      "file": "**/.venv/**",
      "reader_ids": [],
      "reason": "configured-subtree",
      "status": "excluded"
    },
    {
      "content_sha256": "hmmm",
      "entry_kind": "subtree",
      "file": "**/__pycache__/**",
      "reader_ids": [],
      "reason": "configured-subtree",
      "status": "excluded"
    },
    {
      "content_sha256": "hmmm",
      "entry_kind": "subtree",
      "file": "**/build/**",
      "reader_ids": [],
      "reason": "configured-subtree",
      "status": "excluded"
    },
    {
      "content_sha256": "hmmm",
      "entry_kind": "subtree",
      "file": "**/dist/**",
      "reader_ids": [],
      "reason": "configured-subtree",
      "status": "excluded"
    },
    {
      "content_sha256": "hmmm",
      "entry_kind": "subtree",
      "file": "**/node_modules/**",
      "reader_ids": [],
      "reason": "configured-subtree",
      "status": "excluded"
    },
    {
      "content_sha256": "hmmm",
      "entry_kind": "subtree",
      "file": "**/target/**",
      "reader_ids": [],
      "reason": "configured-subtree",
      "status": "excluded"
    },
    {
      "content_sha256": "hmmm",
      "entry_kind": "subtree",
      "file": "**/venv/**",
      "reader_ids": [],
      "reason": "configured-subtree",
      "status": "excluded"
    },
    {
      "content_sha256": "7c10c65ed1dac5fed3beb79d2cd058732871f61c7f6d84d0fd1d8c5e024d1c90",
      "entry_kind": "file",
      "file": ".gitignore",
      "reader_ids": [
        "gitignore-lines"
      ],
      "size": 180,
      "status": "supported"
    },
    {
      "content_sha256": "260bed8e325ecae725dc7572e2c1f32a9e67f85f5f976e19c1de471aeac005a8",
      "entry_kind": "file",
      "file": "CLAUDE.md",
      "reader_ids": [
        "markdown-frontmatter"
      ],
      "size": 6031,
      "status": "supported"
    },
    {
      "content_sha256": "887eb6742b7cdf1b343fe41b107371a4b753c9f9a0ba97ae60afadbf664884bb",
      "entry_kind": "file",
      "file": "Google/Gemini/INITIAL_EXPOSURE.md",
      "reader_ids": [
        "markdown-frontmatter"
      ],
      "size": 3765,
      "status": "supported"
    },
    {
      "content_sha256": "9ba9550ad48438d0836ddab3da480b3b69ffa0aac7b7878b5a0039e7ab429411",
      "entry_kind": "file",
      "file": "LICENSE",
      "reader_ids": [
        "license-text"
      ],
      "size": 18657,
      "status": "partial"
    },
    {
      "content_sha256": "a97d8f857e5d9ffa59ccacf1d213772e5ac02fcd4c0b5e3168b4d31582757f30",
      "entry_kind": "file",
      "file": "README.md",
      "reader_ids": [
        "markdown-frontmatter"
      ],
      "size": 3099,
      "status": "supported"
    },
    {
      "content_sha256": "hmmm",
      "entry_kind": "output",
      "file": "ai-tiw_msdmd.ts",
      "reader_ids": [],
      "reason": "generated-collection-output",
      "status": "excluded"
    },
    {
      "content_sha256": "589eab93882e4336b3af07159d5f5348fe9d177157fef080381bd3c10e0303ef",
      "entry_kind": "file",
      "file": "claude/README.md",
      "reader_ids": [
        "markdown-frontmatter"
      ],
      "size": 1272,
      "status": "supported"
    },
    {
      "content_sha256": "3184d9ab9f2bf34b261ba90dbee34c53258b202f24a814e40910a6ca71ddf5cb",
      "entry_kind": "file",
      "file": "copilot/README.md",
      "reader_ids": [
        "markdown-frontmatter"
      ],
      "size": 1276,
      "status": "supported"
    },
    {
      "content_sha256": "e3d09ca68218ada3921f98ceefb2792dfca5287a3497c5228d651579316e3e1b",
      "entry_kind": "file",
      "file": "deepseek/README.md",
      "reader_ids": [
        "markdown-frontmatter"
      ],
      "size": 1268,
      "status": "supported"
    },
    {
      "content_sha256": "b72cf8828d63ee251b3e3bcb9002db6891f09ddfb2a7295c5d8dd25a5ec2a581",
      "entry_kind": "file",
      "file": "docs/icon.svg",
      "reader_ids": [
        "svg-metadata"
      ],
      "size": 1148,
      "status": "supported"
    },
    {
      "content_sha256": "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
      "entry_kind": "file",
      "file": "files/.gitkeep",
      "reader_ids": [],
      "size": 0,
      "status": "unsupported"
    },
    {
      "content_sha256": "5feae38c575c1c79243208c6d95b7181a0948110278035803c153bb53d70595f",
      "entry_kind": "file",
      "file": "gemini/README.md",
      "reader_ids": [
        "markdown-frontmatter"
      ],
      "size": 1269,
      "status": "supported"
    },
    {
      "content_sha256": "9c660caa51990c739d92b30e4a4c1436ef99e8aba415044cad4c0aa738ebd742",
      "entry_kind": "file",
      "file": "gpt/01-response-to-the-interdependent-way.md",
      "reader_ids": [
        "markdown-frontmatter"
      ],
      "size": 4074,
      "status": "supported"
    },
    {
      "content_sha256": "066510ab37f8e70cfdc94880968b56f00832e6aa5cd0a025963b40c0911c4c63",
      "entry_kind": "file",
      "file": "gpt/02-response-to-the-author.md",
      "reader_ids": [
        "markdown-frontmatter"
      ],
      "size": 3747,
      "status": "supported"
    },
    {
      "content_sha256": "069d5e2dde166ff767c773bace555733a6a28bfa4ee83dd9647df95f7d1dfcff",
      "entry_kind": "file",
      "file": "gpt/README.md",
      "reader_ids": [
        "markdown-frontmatter"
      ],
      "size": 2303,
      "status": "supported"
    },
    {
      "content_sha256": "d2ec181b4e194fa27898fd9cba77c0d65084134a5cf47c6109703af69e54ea5b",
      "entry_kind": "file",
      "file": "grok/full-canon.md",
      "reader_ids": [
        "markdown-frontmatter"
      ],
      "size": 15857,
      "status": "supported"
    },
    {
      "content_sha256": "baaf34409b779366590f6228db4e1aae08702f77e19a1f5705eb68c313ca6b2e",
      "entry_kind": "file",
      "file": "grok/grok-tiw.md",
      "reader_ids": [
        "markdown-frontmatter"
      ],
      "size": 9543,
      "status": "supported"
    },
    {
      "content_sha256": "961675e41b269f12305b9432484ca2b4bbc6ab4c10ad1e5562cc886bec704529",
      "entry_kind": "file",
      "file": "grok/interdefinables.md",
      "reader_ids": [
        "markdown-frontmatter"
      ],
      "size": 996,
      "status": "supported"
    },
    {
      "content_sha256": "9a01772b97fc2e42ae6c3a1c2ec8faef992a5cb3e7126e58980f075a0318093f",
      "entry_kind": "file",
      "file": "meta/README.md",
      "reader_ids": [
        "markdown-frontmatter"
      ],
      "size": 1279,
      "status": "supported"
    },
    {
      "content_sha256": "277255b7a04b84871e94c288fb7edf43e26540a3d0a9a32a491ca20ce2d59805",
      "entry_kind": "file",
      "file": "mistral/README.md",
      "reader_ids": [
        "markdown-frontmatter"
      ],
      "size": 1287,
      "status": "supported"
    },
    {
      "content_sha256": "1d2c6ad4ca395e0e7e3a1d0a3ce49afa77d9d0b9dfa68c5792dc2a845ff7386f",
      "entry_kind": "file",
      "file": "perplexity/README.md",
      "reader_ids": [
        "markdown-frontmatter"
      ],
      "size": 1276,
      "status": "supported"
    },
    {
      "content_sha256": "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
      "entry_kind": "file",
      "file": "responses/.gitkeep",
      "reader_ids": [],
      "size": 0,
      "status": "unsupported"
    }
  ],
  "edges": [],
  "facts": [
    {
      "address": "msdmd://The-Interdependency%2Fai-tiw@snapshot%3A263d5ac1b08c8308b74918b034d0822763edca987511da826881978dcf33cddf/.gitignore#subject/path-rule/rule%3A1/fact/ignore-rule/lines%3A2-2/__pycache__%2F",
      "convention": {
        "dialect": "gitignore",
        "namespace": "git.ignore",
        "version": "gitignore current documented grammar"
      },
      "extraction": {
        "configuration_sha256": "30d4bfb164b0a38e8bf63c67b5d8e7f8178dbae9db6e1378d8d79c4e35a0c1d6",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "gitignore-lines",
        "reader_version": "1.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "ignore-rule",
      "native": {
        "id": "__pycache__/",
        "value": {
          "anchored": false,
          "directory_only": true,
          "negated": false,
          "order": 1,
          "pattern": "__pycache__/"
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "7c10c65ed1dac5fed3beb79d2cd058732871f61c7f6d84d0fd1d8c5e024d1c90",
        "file": ".gitignore",
        "location": {
          "end_line": 2,
          "start_line": 2
        },
        "repository": "The-Interdependency/ai-tiw",
        "revision": "snapshot:263d5ac1b08c8308b74918b034d0822763edca987511da826881978dcf33cddf"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fai-tiw@snapshot%3A263d5ac1b08c8308b74918b034d0822763edca987511da826881978dcf33cddf/.gitignore#subject/path-rule/rule%3A1",
        "identity": "rule:1",
        "scope": "path-rule"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fai-tiw@snapshot%3A263d5ac1b08c8308b74918b034d0822763edca987511da826881978dcf33cddf/.gitignore#subject/path-rule/rule%3A2/fact/ignore-rule/lines%3A3-3/%2A.py%5Bcod%5D",
      "convention": {
        "dialect": "gitignore",
        "namespace": "git.ignore",
        "version": "gitignore current documented grammar"
      },
      "extraction": {
        "configuration_sha256": "30d4bfb164b0a38e8bf63c67b5d8e7f8178dbae9db6e1378d8d79c4e35a0c1d6",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "gitignore-lines",
        "reader_version": "1.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "ignore-rule",
      "native": {
        "id": "*.py[cod]",
        "value": {
          "anchored": false,
          "directory_only": false,
          "negated": false,
          "order": 2,
          "pattern": "*.py[cod]"
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "7c10c65ed1dac5fed3beb79d2cd058732871f61c7f6d84d0fd1d8c5e024d1c90",
        "file": ".gitignore",
        "location": {
          "end_line": 3,
          "start_line": 3
        },
        "repository": "The-Interdependency/ai-tiw",
        "revision": "snapshot:263d5ac1b08c8308b74918b034d0822763edca987511da826881978dcf33cddf"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fai-tiw@snapshot%3A263d5ac1b08c8308b74918b034d0822763edca987511da826881978dcf33cddf/.gitignore#subject/path-rule/rule%3A2",
        "identity": "rule:2",
        "scope": "path-rule"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fai-tiw@snapshot%3A263d5ac1b08c8308b74918b034d0822763edca987511da826881978dcf33cddf/.gitignore#subject/path-rule/rule%3A3/fact/ignore-rule/lines%3A4-4/%2A%24py.class",
      "convention": {
        "dialect": "gitignore",
        "namespace": "git.ignore",
        "version": "gitignore current documented grammar"
      },
      "extraction": {
        "configuration_sha256": "30d4bfb164b0a38e8bf63c67b5d8e7f8178dbae9db6e1378d8d79c4e35a0c1d6",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "gitignore-lines",
        "reader_version": "1.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "ignore-rule",
      "native": {
        "id": "*$py.class",
        "value": {
          "anchored": false,
          "directory_only": false,
          "negated": false,
          "order": 3,
          "pattern": "*$py.class"
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "7c10c65ed1dac5fed3beb79d2cd058732871f61c7f6d84d0fd1d8c5e024d1c90",
        "file": ".gitignore",
        "location": {
          "end_line": 4,
          "start_line": 4
        },
        "repository": "The-Interdependency/ai-tiw",
        "revision": "snapshot:263d5ac1b08c8308b74918b034d0822763edca987511da826881978dcf33cddf"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fai-tiw@snapshot%3A263d5ac1b08c8308b74918b034d0822763edca987511da826881978dcf33cddf/.gitignore#subject/path-rule/rule%3A3",
        "identity": "rule:3",
        "scope": "path-rule"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fai-tiw@snapshot%3A263d5ac1b08c8308b74918b034d0822763edca987511da826881978dcf33cddf/.gitignore#subject/path-rule/rule%3A4/fact/ignore-rule/lines%3A7-7/.pytest_cache%2F",
      "convention": {
        "dialect": "gitignore",
        "namespace": "git.ignore",
        "version": "gitignore current documented grammar"
      },
      "extraction": {
        "configuration_sha256": "30d4bfb164b0a38e8bf63c67b5d8e7f8178dbae9db6e1378d8d79c4e35a0c1d6",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "gitignore-lines",
        "reader_version": "1.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "ignore-rule",
      "native": {
        "id": ".pytest_cache/",
        "value": {
          "anchored": false,
          "directory_only": true,
          "negated": false,
          "order": 4,
          "pattern": ".pytest_cache/"
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "7c10c65ed1dac5fed3beb79d2cd058732871f61c7f6d84d0fd1d8c5e024d1c90",
        "file": ".gitignore",
        "location": {
          "end_line": 7,
          "start_line": 7
        },
        "repository": "The-Interdependency/ai-tiw",
        "revision": "snapshot:263d5ac1b08c8308b74918b034d0822763edca987511da826881978dcf33cddf"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fai-tiw@snapshot%3A263d5ac1b08c8308b74918b034d0822763edca987511da826881978dcf33cddf/.gitignore#subject/path-rule/rule%3A4",
        "identity": "rule:4",
        "scope": "path-rule"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fai-tiw@snapshot%3A263d5ac1b08c8308b74918b034d0822763edca987511da826881978dcf33cddf/.gitignore#subject/path-rule/rule%3A5/fact/ignore-rule/lines%3A8-8/.ruff_cache%2F",
      "convention": {
        "dialect": "gitignore",
        "namespace": "git.ignore",
        "version": "gitignore current documented grammar"
      },
      "extraction": {
        "configuration_sha256": "30d4bfb164b0a38e8bf63c67b5d8e7f8178dbae9db6e1378d8d79c4e35a0c1d6",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "gitignore-lines",
        "reader_version": "1.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "ignore-rule",
      "native": {
        "id": ".ruff_cache/",
        "value": {
          "anchored": false,
          "directory_only": true,
          "negated": false,
          "order": 5,
          "pattern": ".ruff_cache/"
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "7c10c65ed1dac5fed3beb79d2cd058732871f61c7f6d84d0fd1d8c5e024d1c90",
        "file": ".gitignore",
        "location": {
          "end_line": 8,
          "start_line": 8
        },
        "repository": "The-Interdependency/ai-tiw",
        "revision": "snapshot:263d5ac1b08c8308b74918b034d0822763edca987511da826881978dcf33cddf"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fai-tiw@snapshot%3A263d5ac1b08c8308b74918b034d0822763edca987511da826881978dcf33cddf/.gitignore#subject/path-rule/rule%3A5",
        "identity": "rule:5",
        "scope": "path-rule"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fai-tiw@snapshot%3A263d5ac1b08c8308b74918b034d0822763edca987511da826881978dcf33cddf/.gitignore#subject/path-rule/rule%3A6/fact/ignore-rule/lines%3A9-9/.mypy_cache%2F",
      "convention": {
        "dialect": "gitignore",
        "namespace": "git.ignore",
        "version": "gitignore current documented grammar"
      },
      "extraction": {
        "configuration_sha256": "30d4bfb164b0a38e8bf63c67b5d8e7f8178dbae9db6e1378d8d79c4e35a0c1d6",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "gitignore-lines",
        "reader_version": "1.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "ignore-rule",
      "native": {
        "id": ".mypy_cache/",
        "value": {
          "anchored": false,
          "directory_only": true,
          "negated": false,
          "order": 6,
          "pattern": ".mypy_cache/"
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "7c10c65ed1dac5fed3beb79d2cd058732871f61c7f6d84d0fd1d8c5e024d1c90",
        "file": ".gitignore",
        "location": {
          "end_line": 9,
          "start_line": 9
        },
        "repository": "The-Interdependency/ai-tiw",
        "revision": "snapshot:263d5ac1b08c8308b74918b034d0822763edca987511da826881978dcf33cddf"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fai-tiw@snapshot%3A263d5ac1b08c8308b74918b034d0822763edca987511da826881978dcf33cddf/.gitignore#subject/path-rule/rule%3A6",
        "identity": "rule:6",
        "scope": "path-rule"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fai-tiw@snapshot%3A263d5ac1b08c8308b74918b034d0822763edca987511da826881978dcf33cddf/.gitignore#subject/path-rule/rule%3A7/fact/ignore-rule/lines%3A12-12/.DS_Store",
      "convention": {
        "dialect": "gitignore",
        "namespace": "git.ignore",
        "version": "gitignore current documented grammar"
      },
      "extraction": {
        "configuration_sha256": "30d4bfb164b0a38e8bf63c67b5d8e7f8178dbae9db6e1378d8d79c4e35a0c1d6",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "gitignore-lines",
        "reader_version": "1.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "ignore-rule",
      "native": {
        "id": ".DS_Store",
        "value": {
          "anchored": false,
          "directory_only": false,
          "negated": false,
          "order": 7,
          "pattern": ".DS_Store"
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "7c10c65ed1dac5fed3beb79d2cd058732871f61c7f6d84d0fd1d8c5e024d1c90",
        "file": ".gitignore",
        "location": {
          "end_line": 12,
          "start_line": 12
        },
        "repository": "The-Interdependency/ai-tiw",
        "revision": "snapshot:263d5ac1b08c8308b74918b034d0822763edca987511da826881978dcf33cddf"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fai-tiw@snapshot%3A263d5ac1b08c8308b74918b034d0822763edca987511da826881978dcf33cddf/.gitignore#subject/path-rule/rule%3A7",
        "identity": "rule:7",
        "scope": "path-rule"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fai-tiw@snapshot%3A263d5ac1b08c8308b74918b034d0822763edca987511da826881978dcf33cddf/.gitignore#subject/path-rule/rule%3A8/fact/ignore-rule/lines%3A15-15/.env",
      "convention": {
        "dialect": "gitignore",
        "namespace": "git.ignore",
        "version": "gitignore current documented grammar"
      },
      "extraction": {
        "configuration_sha256": "30d4bfb164b0a38e8bf63c67b5d8e7f8178dbae9db6e1378d8d79c4e35a0c1d6",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "gitignore-lines",
        "reader_version": "1.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "ignore-rule",
      "native": {
        "id": ".env",
        "value": {
          "anchored": false,
          "directory_only": false,
          "negated": false,
          "order": 8,
          "pattern": ".env"
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "7c10c65ed1dac5fed3beb79d2cd058732871f61c7f6d84d0fd1d8c5e024d1c90",
        "file": ".gitignore",
        "location": {
          "end_line": 15,
          "start_line": 15
        },
        "repository": "The-Interdependency/ai-tiw",
        "revision": "snapshot:263d5ac1b08c8308b74918b034d0822763edca987511da826881978dcf33cddf"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fai-tiw@snapshot%3A263d5ac1b08c8308b74918b034d0822763edca987511da826881978dcf33cddf/.gitignore#subject/path-rule/rule%3A8",
        "identity": "rule:8",
        "scope": "path-rule"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fai-tiw@snapshot%3A263d5ac1b08c8308b74918b034d0822763edca987511da826881978dcf33cddf/LICENSE#subject/document/LICENSE/fact/license-declaration/document",
      "convention": {
        "dialect": "license-text",
        "namespace": "license.text",
        "version": "detector v1"
      },
      "extraction": {
        "configuration_sha256": "0df88ba5528297545698e1918e76fae88a00e98aa58186fb3204604df96989b8",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "license-text",
        "reader_version": "1.0.0",
        "support": "partial"
      },
      "kind": "license-declaration",
      "native": {
        "id": null,
        "value": {
          "detection_method": "unrecognized-text",
          "expression": "hmmm",
          "legal_interpretation": "not-performed",
          "text": "source-reference"
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "9ba9550ad48438d0836ddab3da480b3b69ffa0aac7b7878b5a0039e7ab429411",
        "file": "LICENSE",
        "location": {
          "pointer": "document"
        },
        "repository": "The-Interdependency/ai-tiw",
        "revision": "snapshot:263d5ac1b08c8308b74918b034d0822763edca987511da826881978dcf33cddf"
      },
      "standing": "derived",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fai-tiw@snapshot%3A263d5ac1b08c8308b74918b034d0822763edca987511da826881978dcf33cddf/LICENSE#subject/document/LICENSE",
        "identity": "LICENSE",
        "scope": "document"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fai-tiw@snapshot%3A263d5ac1b08c8308b74918b034d0822763edca987511da826881978dcf33cddf/docs/icon.svg#subject/document/docs%2Ficon.svg/fact/document-metadata/%2Fsvg",
      "convention": {
        "dialect": "xml",
        "namespace": "svg.document-metadata",
        "version": "SVG document subset v1"
      },
      "extraction": {
        "configuration_sha256": "a636d6b73590150040db1ccaaf5ce1b545664bfe42d467b39cae2cc2903dd3f2",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "svg-metadata",
        "reader_version": "1.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "document-metadata",
      "native": {
        "id": null,
        "value": {
          "attributes": {
            "aria-label": "ai-tiw icon",
            "height": "512",
            "role": "img",
            "viewBox": "0 0 100 100",
            "width": "512"
          },
          "description": null,
          "title": "ai-tiw — three readings corpus"
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "b72cf8828d63ee251b3e3bcb9002db6891f09ddfb2a7295c5d8dd25a5ec2a581",
        "file": "docs/icon.svg",
        "location": {
          "pointer": "/svg"
        },
        "repository": "The-Interdependency/ai-tiw",
        "revision": "snapshot:263d5ac1b08c8308b74918b034d0822763edca987511da826881978dcf33cddf"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fai-tiw@snapshot%3A263d5ac1b08c8308b74918b034d0822763edca987511da826881978dcf33cddf/docs/icon.svg#subject/document/docs%2Ficon.svg",
        "identity": "docs/icon.svg",
        "scope": "document"
      }
    }
  ],
  "gaps": [],
  "reader_manifests": [
    {
      "convention": "python.source-metadata",
      "dependencies": [
        "python-stdlib:ast",
        "python-stdlib:tokenize",
        "docstring-parser==0.18.0"
      ],
      "detection": [
        ".py",
        ".pyi",
        ".pyw"
      ],
      "entry_point": "msdmd.readers:_read_python",
      "execution_policy": "parse only; never import or evaluate",
      "feature_subset": [
        "qualified symbols and signatures",
        "AST/token comment attachment shared with module_projection",
        "ReST/Google/NumPy docstring fields",
        "lexically scoped imports",
        "literal __all__"
      ],
      "known_limitations": [
        "runtime effects and dynamic imports/exports are not executed"
      ],
      "reader_id": "python-ast",
      "scope_attachment": "module and qualified symbol",
      "specification": "https://docs.python.org/3/reference/",
      "support": "implemented-and-tested",
      "supported_versions": [
        "Python 3 syntax accepted by the running ast parser"
      ],
      "unknown_field_policy": "preserve source expression or emit dynamic-unresolved diagnostic",
      "version": "2.0.0"
    },
    {
      "convention": "msdmd.ratios-line",
      "dependencies": [
        "msdmd.parsers.universal"
      ],
      "detection": [
        "supported line-comment source containing ratios:"
      ],
      "entry_point": "msdmd.readers:_read_ratios",
      "execution_policy": "text parse only; never run ratio computers",
      "feature_subset": [
        "opening/closing placement",
        "named ratio/value preservation"
      ],
      "reader_id": "msdmd-ratios",
      "scope_attachment": "file boundary occurrence",
      "specification": "The-Interdependency/skill-lib ratios/SKILL.md",
      "support": "implemented-and-tested",
      "supported_versions": [
        "named ratios line v1"
      ],
      "unknown_field_policy": "preserve hmmm as an explicit value",
      "version": "1.0.0"
    },
    {
      "convention": "json.document",
      "dependencies": [
        "python-stdlib:json"
      ],
      "detection": [
        ".json"
      ],
      "entry_point": "msdmd.readers:_read_json",
      "execution_policy": "parse only; no reference resolution",
      "feature_subset": [
        "complete typed document tree",
        "package.json dependency classes"
      ],
      "reader_id": "json-stdlib",
      "scope_attachment": "document and JSON Pointer",
      "specification": "RFC 8259",
      "support": "implemented-and-tested",
      "supported_versions": [
        "RFC 8259 JSON"
      ],
      "unknown_field_policy": "preserve in typed document tree",
      "version": "1.0.0"
    },
    {
      "convention": "toml.document",
      "dependencies": [
        "python-stdlib:tomllib"
      ],
      "detection": [
        ".toml"
      ],
      "entry_point": "msdmd.readers:_read_toml",
      "execution_policy": "parse only; never invoke build backends",
      "feature_subset": [
        "complete typed document tree",
        "pyproject project/build dependency classes"
      ],
      "reader_id": "toml-stdlib",
      "scope_attachment": "document and TOML key path",
      "specification": "TOML 1.0.0 and Python packaging metadata specifications",
      "support": "implemented-and-tested",
      "supported_versions": [
        "TOML accepted by the running tomllib parser"
      ],
      "unknown_field_policy": "preserve in typed document tree",
      "version": "1.0.0"
    },
    {
      "convention": "markdown.yaml-frontmatter",
      "dependencies": [
        "PyYAML==6.0.3"
      ],
      "detection": [
        ".md",
        ".mdx"
      ],
      "entry_point": "msdmd.readers:_read_markdown",
      "execution_policy": "text parse only; never execute MDX",
      "feature_subset": [
        "nested frontmatter and typed values",
        "safe acyclic aliases",
        "multiline scalars"
      ],
      "reader_id": "markdown-frontmatter",
      "scope_attachment": "document",
      "specification": "https://yaml.org/spec/1.2.2/",
      "support": "implemented-and-tested",
      "supported_versions": [
        "YAML 1.2 core scalar subset with typed scalar-key preservation"
      ],
      "unknown_field_policy": "preserve typed tree; reject duplicate keys, custom tags, cyclic aliases and merge dialects",
      "version": "2.0.0"
    },
    {
      "convention": "yaml.core",
      "dependencies": [
        "PyYAML==6.0.3"
      ],
      "detection": [
        ".yml",
        ".yaml"
      ],
      "entry_point": "msdmd.readers:_read_yaml",
      "execution_policy": "text parse only; no tags, templates, actions, or includes",
      "feature_subset": [
        "typed nested mappings/sequences",
        "flow syntax",
        "acyclic aliases",
        "multiline scalars"
      ],
      "known_limitations": [
        "custom tags, merge keys and cyclic aliases rejected; keys retain lexical strings"
      ],
      "reader_id": "yaml-core",
      "scope_attachment": "document and structural path",
      "specification": "https://yaml.org/spec/1.2.2/",
      "support": "implemented-and-tested",
      "supported_versions": [
        "YAML 1.2 core with typed scalar-key preservation"
      ],
      "unknown_field_policy": "diagnose unsupported syntax; preserve raw source by digest",
      "version": "2.0.0"
    },
    {
      "convention": "typescript.source-metadata",
      "dependencies": [
        "Node.js",
        "typescript==5.8.3"
      ],
      "detection": [
        ".js",
        ".jsx",
        ".mjs",
        ".cjs",
        ".ts",
        ".tsx",
        ".mts",
        ".cts"
      ],
      "entry_point": "msdmd.readers:_read_typescript",
      "execution_policy": "trusted parser worker only; inspected code never executed",
      "feature_subset": [
        "syntax-tree symbol ownership",
        "multiline signatures",
        "imports and reexports",
        "compiler JSDoc tags with unknown tag text preserved"
      ],
      "known_limitations": [
        "not a TSDoc validator",
        "no type checking, config loading, import resolution or target execution"
      ],
      "reader_id": "typescript-compiler",
      "scope_attachment": "compiler AST module/symbol",
      "specification": "https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html",
      "support": "implemented-and-tested",
      "supported_versions": [
        "TypeScript 5.8.3 parser accepting JS/JSX/TS/TSX/MJS/MTS/CTS/CJS"
      ],
      "unknown_field_policy": "retain raw documentation tags and report parse diagnostics",
      "version": "2.0.0"
    },
    {
      "convention": "github.codeowners",
      "dependencies": [],
      "detection": [
        "CODEOWNERS",
        ".github/CODEOWNERS",
        "docs/CODEOWNERS"
      ],
      "entry_point": "msdmd.readers:_read_codeowners",
      "execution_policy": "text parse only",
      "feature_subset": [
        "ordered pattern and owner extraction"
      ],
      "reader_id": "github-codeowners",
      "scope_attachment": "ordered path rule",
      "specification": "https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners",
      "support": "implemented-and-tested",
      "supported_versions": [
        "GitHub CODEOWNERS line grammar"
      ],
      "unknown_field_policy": "diagnose malformed rules; do not infer operational ownership",
      "version": "1.0.0"
    },
    {
      "convention": "shell.source-metadata",
      "dependencies": [],
      "detection": [
        ".sh",
        ".bash",
        ".zsh",
        ".fish",
        "extensionless shebang scripts"
      ],
      "entry_point": "msdmd.readers:_read_shell",
      "execution_policy": "text parse only; never source or execute",
      "feature_subset": [
        "shebang",
        "ShellCheck directives"
      ],
      "reader_id": "shell-static",
      "scope_attachment": "file",
      "specification": "POSIX shebang convention and ShellCheck directives",
      "support": "implemented-and-tested",
      "supported_versions": [
        "declaration extraction only"
      ],
      "unknown_field_policy": "preserve directive text",
      "version": "1.0.0"
    },
    {
      "convention": "systemd.unit",
      "dependencies": [],
      "detection": [
        ".service",
        ".socket",
        ".timer",
        ".path",
        ".target"
      ],
      "entry_point": "msdmd.readers:_read_systemd",
      "execution_policy": "text parse only; never invoke systemd",
      "feature_subset": [
        "ordered sections",
        "repeated directives",
        "continuation lines"
      ],
      "reader_id": "systemd-unit",
      "scope_attachment": "unit section and directive occurrence",
      "specification": "https://www.freedesktop.org/software/systemd/man/latest/systemd.syntax.html",
      "support": "implemented-and-tested",
      "supported_versions": [
        "section/key/value declaration extraction"
      ],
      "unknown_field_policy": "preserve key/value and order without interpreting runtime effect",
      "version": "1.0.0"
    },
    {
      "convention": "git.ignore",
      "dependencies": [],
      "detection": [
        ".gitignore"
      ],
      "entry_point": "msdmd.readers:_read_gitignore",
      "execution_policy": "text parse only; never invoke Git matching",
      "feature_subset": [
        "pattern order",
        "negation",
        "anchoring",
        "directory-only flag"
      ],
      "reader_id": "gitignore-lines",
      "scope_attachment": "repository path rule",
      "specification": "https://git-scm.com/docs/gitignore",
      "support": "implemented-and-tested",
      "supported_versions": [
        "ordered pattern declarations"
      ],
      "unknown_field_policy": "preserve pattern text without evaluating matches",
      "version": "1.0.0"
    },
    {
      "convention": "python.requirements-file",
      "dependencies": [],
      "detection": [
        "requirements*.txt",
        "constraints*.txt"
      ],
      "entry_point": "msdmd.readers:_read_requirements",
      "execution_policy": "text parse only; never install or resolve packages",
      "feature_subset": [
        "requirement text",
        "package name",
        "options",
        "ordered source lines"
      ],
      "known_limitations": [
        "does not resolve includes, environment markers, URLs, or indexes"
      ],
      "reader_id": "python-requirements",
      "scope_attachment": "requirements document line",
      "specification": "PyPA requirements file format",
      "support": "partial",
      "supported_versions": [
        "one-line requirement and option subset"
      ],
      "unknown_field_policy": "preserve text and redact URL credentials",
      "version": "1.0.0"
    },
    {
      "convention": "license.text",
      "dependencies": [],
      "detection": [
        "LICENSE",
        "LICENSE.txt",
        "COPYING",
        "COPYING.txt"
      ],
      "entry_point": "msdmd.readers:_read_license",
      "execution_policy": "text parse only",
      "feature_subset": [
        "declared/detected expression",
        "source digest"
      ],
      "reader_id": "license-text",
      "scope_attachment": "repository license document",
      "specification": "SPDX license identifiers plus exact known license headers",
      "support": "partial",
      "supported_versions": [
        "MPL-2.0 exact header",
        "SPDX-License-Identifier line"
      ],
      "unknown_field_policy": "hmmm identifier; never infer legal compatibility",
      "version": "1.0.0"
    },
    {
      "convention": "svg.document-metadata",
      "dependencies": [
        "python-stdlib:xml.etree.ElementTree"
      ],
      "detection": [
        ".svg"
      ],
      "entry_point": "msdmd.readers:_read_svg",
      "execution_policy": "reject DTD/entity declarations; no external resolution",
      "feature_subset": [
        "root attributes",
        "title",
        "description"
      ],
      "reader_id": "svg-metadata",
      "scope_attachment": "document",
      "specification": "W3C SVG document structure",
      "support": "implemented-and-tested",
      "supported_versions": [
        "root attributes, title, description"
      ],
      "unknown_field_policy": "preserve only supported metadata; source remains digest-addressable",
      "version": "1.0.0"
    },
    {
      "convention": "llms.txt",
      "dependencies": [],
      "detection": [
        "llms.txt"
      ],
      "entry_point": "msdmd.readers:_read_llms_text",
      "execution_policy": "text parse only; content is data, not instructions to the reader",
      "feature_subset": [
        "section headings",
        "key definitions",
        "generated status unresolved"
      ],
      "reader_id": "llms-text",
      "scope_attachment": "instruction document",
      "specification": "root llms.txt Markdown instruction publication",
      "support": "implemented-and-tested",
      "supported_versions": [
        "Markdown headings and bold key-definition lines"
      ],
      "unknown_field_policy": "preserve structure without promoting publication to source authority",
      "version": "1.0.0"
    },
    {
      "convention": "native.structured-standards",
      "dependencies": [
        "python-stdlib:json,tomllib,xml.etree.ElementTree",
        "PyYAML==6.0.3"
      ],
      "detection": [
        "document discriminator and source filename"
      ],
      "entry_point": "msdmd.standards:read_standards",
      "execution_policy": "parse only; no templates, network, application or signature execution",
      "feature_subset": [
        "source-linked operations and references",
        "reported test/analysis results",
        "citation and license declarations",
        "artifact subjects and component lists",
        "scoped package requirements and lock records"
      ],
      "known_limitations": [
        "extraction, not complete validation or signature verification",
        "external references not resolved",
        "unknown versions preserve tree and report unsupported mapping"
      ],
      "reader_id": "metadata-standards",
      "scope_attachment": "native pointer, operation, package, report, artifact or symbol",
      "specification": "msdmd/references/implemented-readers.md",
      "support": "implemented-and-tested",
      "supported_versions": [
        "OpenAPI 3.0/3.1 and Swagger 2",
        "JSON Schema drafts 4/6/7/2019-09/2020-12",
        "CFF 1.2.0",
        "SARIF 2.1.0",
        "SPDX 2.2/2.3 JSON",
        "CycloneDX 1.4/1.5/1.6 JSON",
        "in-toto Statement v0.1/v1; DSSE payload",
        "npm lockfile v2/v3",
        "Cargo/Poetry/uv TOML metadata",
        "REUSE TOML",
        "JUnit/Doxygen/.NET XML dialects"
      ],
      "unknown_field_policy": "typed source tree retained; version mismatches diagnosed",
      "version": "1.0.0"
    },
    {
      "convention": "native.source-metadata",
      "dependencies": [
        "msdmd/requirements.txt"
      ],
      "detection": [
        ".rs",
        ".java",
        ".c",
        ".cc",
        ".cpp",
        ".cxx",
        ".hpp",
        ".hxx",
        ".h (ambiguous)"
      ],
      "entry_point": "msdmd.grammar_code:read_grammar",
      "execution_policy": "parse only; no compiler, macro expansion or annotation processing",
      "feature_subset": [
        "named declarations",
        "Rustdoc/Javadoc/Doxygen raw docs and repeated tags",
        "imports",
        "attributes",
        "SPDX headers"
      ],
      "reader_id": "native-grammars",
      "scope_attachment": "lexical symbols and adjacent documentation",
      "specification": "pinned tree-sitter language grammars",
      "support": "partial",
      "supported_versions": [
        "Rust grammar 0.24.2",
        "Java grammar 0.23.5",
        "C grammar 0.24.2",
        "C++ grammar 0.23.4"
      ],
      "unknown_field_policy": "preserve raw documentation and syntax; diagnose macro/conditional context",
      "version": "1.0.0"
    },
    {
      "convention": "go.source-metadata",
      "dependencies": [
        "tree-sitter==0.25.2",
        "tree-sitter-go==0.25.0"
      ],
      "detection": [
        ".go"
      ],
      "entry_point": "msdmd.go_code:read_go",
      "execution_policy": "installed grammar only; never compile, import or generate target code",
      "feature_subset": [
        "qualified declarations and receiver methods",
        "struct tag literals",
        "native comment attachment",
        "import literals",
        "inert compiler/build/generation directives",
        "SPDX headers"
      ],
      "known_limitations": [
        "Go 1.26 new(expression) forms are not fully supported by this grammar",
        "no build selection, type checking, import resolution, tag interpretation or target execution"
      ],
      "reader_id": "go-tree-sitter",
      "scope_attachment": "package, lexical symbol, declaration group or module",
      "specification": "https://go.dev/doc/comment",
      "support": "partial",
      "supported_versions": [
        "Go syntax accepted by tree-sitter-go 0.25.0"
      ],
      "unknown_field_policy": "preserve raw source spans; grammar errors invalidate required coverage",
      "version": "1.0.0"
    },
    {
      "convention": "go.module-file",
      "dependencies": [
        "python-stdlib"
      ],
      "detection": [
        "go.mod",
        "go.work",
        "go.sum"
      ],
      "entry_point": "msdmd.go_modules:read_go_modules",
      "execution_policy": "text parse only; never invoke go or network",
      "feature_subset": [
        "module identity",
        "direct/indirect requirements",
        "replacement and exclusion declarations",
        "workspace paths",
        "quoted tokens",
        "inert directives",
        "recorded checksums"
      ],
      "known_limitations": [
        "no module path/version validation, resolution, downloads, checksum verification or multiline string tokens"
      ],
      "reader_id": "go-module-files",
      "scope_attachment": "owning package/workspace file",
      "specification": "https://go.dev/ref/mod",
      "support": "partial",
      "supported_versions": [
        "line-based module/workspace directives; h1 checksum rows"
      ],
      "unknown_field_policy": "retain raw tokens and comments; unknown directives remain unsupported",
      "version": "1.0.0"
    }
  ],
  "reader_runs": [
    {
      "facts_emitted": 0,
      "files_matched": 0,
      "reader_id": "python-ast",
      "reader_version": "2.0.0",
      "status": "not-applicable",
      "support": "implemented-and-tested"
    },
    {
      "facts_emitted": 0,
      "files_matched": 0,
      "reader_id": "msdmd-ratios",
      "reader_version": "1.0.0",
      "status": "not-applicable",
      "support": "implemented-and-tested"
    },
    {
      "facts_emitted": 0,
      "files_matched": 0,
      "reader_id": "json-stdlib",
      "reader_version": "1.0.0",
      "status": "not-applicable",
      "support": "implemented-and-tested"
    },
    {
      "facts_emitted": 0,
      "files_matched": 0,
      "reader_id": "toml-stdlib",
      "reader_version": "1.0.0",
      "status": "not-applicable",
      "support": "implemented-and-tested"
    },
    {
      "facts_emitted": 0,
      "files_matched": 16,
      "reader_id": "markdown-frontmatter",
      "reader_version": "2.0.0",
      "status": "applied",
      "support": "implemented-and-tested"
    },
    {
      "facts_emitted": 0,
      "files_matched": 0,
      "reader_id": "yaml-core",
      "reader_version": "2.0.0",
      "status": "not-applicable",
      "support": "implemented-and-tested"
    },
    {
      "facts_emitted": 0,
      "files_matched": 0,
      "reader_id": "typescript-compiler",
      "reader_version": "2.0.0",
      "status": "not-applicable",
      "support": "implemented-and-tested"
    },
    {
      "facts_emitted": 0,
      "files_matched": 0,
      "reader_id": "github-codeowners",
      "reader_version": "1.0.0",
      "status": "not-applicable",
      "support": "implemented-and-tested"
    },
    {
      "facts_emitted": 0,
      "files_matched": 0,
      "reader_id": "shell-static",
      "reader_version": "1.0.0",
      "status": "not-applicable",
      "support": "implemented-and-tested"
    },
    {
      "facts_emitted": 0,
      "files_matched": 0,
      "reader_id": "systemd-unit",
      "reader_version": "1.0.0",
      "status": "not-applicable",
      "support": "implemented-and-tested"
    },
    {
      "facts_emitted": 8,
      "files_matched": 1,
      "reader_id": "gitignore-lines",
      "reader_version": "1.0.0",
      "status": "applied",
      "support": "implemented-and-tested"
    },
    {
      "facts_emitted": 0,
      "files_matched": 0,
      "reader_id": "python-requirements",
      "reader_version": "1.0.0",
      "status": "not-applicable",
      "support": "partial"
    },
    {
      "facts_emitted": 1,
      "files_matched": 1,
      "reader_id": "license-text",
      "reader_version": "1.0.0",
      "status": "applied",
      "support": "partial"
    },
    {
      "facts_emitted": 1,
      "files_matched": 1,
      "reader_id": "svg-metadata",
      "reader_version": "1.0.0",
      "status": "applied",
      "support": "implemented-and-tested"
    },
    {
      "facts_emitted": 0,
      "files_matched": 0,
      "reader_id": "llms-text",
      "reader_version": "1.0.0",
      "status": "not-applicable",
      "support": "implemented-and-tested"
    },
    {
      "facts_emitted": 0,
      "files_matched": 0,
      "reader_id": "metadata-standards",
      "reader_version": "1.0.0",
      "status": "not-applicable",
      "support": "implemented-and-tested"
    },
    {
      "facts_emitted": 0,
      "files_matched": 0,
      "reader_id": "native-grammars",
      "reader_version": "1.0.0",
      "status": "not-applicable",
      "support": "partial"
    },
    {
      "facts_emitted": 0,
      "files_matched": 0,
      "reader_id": "go-tree-sitter",
      "reader_version": "1.0.0",
      "status": "not-applicable",
      "support": "partial"
    },
    {
      "facts_emitted": 0,
      "files_matched": 0,
      "reader_id": "go-module-files",
      "reader_version": "1.0.0",
      "status": "not-applicable",
      "support": "partial"
    }
  ],
  "repo": "The-Interdependency/ai-tiw",
  "requirements": [],
  "schema": "the-interdependency.msdmd-collection",
  "schema_version": "2.0.0",
  "source": {
    "dirty_worktree": "hmmm",
    "exclusion_accounting": "configured-patterns",
    "git_head": "hmmm",
    "repository": "The-Interdependency/ai-tiw",
    "revision": "snapshot:263d5ac1b08c8308b74918b034d0822763edca987511da826881978dcf33cddf",
    "revision_kind": "content-snapshot",
    "scope": "configured in-scope files; excluded subtrees are reported without traversing",
    "snapshot_complete": true,
    "snapshot_sha256": "cd535865d8b3c81e45aa7d5a1588a99db04524ff13c20b1f44b171eb990ca1b7"
  }
});
