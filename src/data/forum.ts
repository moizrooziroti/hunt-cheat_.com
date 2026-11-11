export interface ForumComment {
  author: string;
  age: string;
  score: number;
  body: string;
  replies?: ForumComment[];
}

export interface ForumPost {
  slug: string;
  category: string;
  categoryTone: 'purple' | 'blue' | 'green' | 'orange';
  title: string;
  excerpt: string;
  author: string;
  age: string;
  commentsCount: number;
  upvotes: number;
  flair?: string;
  body: string[];
  comments: ForumComment[];
  sourceTitle?: string;
  sourcePath?: string;
}

export const forumCategories = [
  { name: 'General', tone: 'purple', icon: 'users' },
  { name: 'Guides & Builds', tone: 'blue', icon: 'navBlog' },
  { name: 'Patch Talk', tone: 'orange', icon: 'refresh' },
  { name: 'Community', tone: 'green', icon: 'messageCircle' },
] as const;

export const forumPosts: ForumPost[] = [
  {
    slug: "hunt-esp-trap-markers-worth-it",
    category: "Guides & Builds",
    categoryTone: "blue",
    title: "Are trap ESP markers worth enabling on Lawson Delta?",
    excerpt: "Illustrative thread on bear traps, concertina, and trip-mine highlights without turning the UI into spaghetti.",
    author: 'guide_team',
    age: "3 hours ago",
    commentsCount: 5,
    upvotes: 84,
    flair: "ESP",
    sourceTitle: "Hunt Showdown ESP Guide",
    sourcePath: "/blogs/hunt-showdown-esp-guide/",
    body: [
          "Trap ESP is useful when you path through compounds fast. The question is how many trap types stay enabled before icons overlap supply crates.",
          "I start with concertina and bear traps only, then add trip mines after one clean bounty. Pair with the ESP guide on the blog for distance caps."
    ],
    comments: [
            {
                  "author": "bayou_listener",
                  "age": "2 hours ago",
                  "score": 19,
                  "body": "Distance filter saves FPS. I keep traps inside 40m and mute duplicate reds."
            },
            {
                  "author": "compound_runner",
                  "age": "2 hours ago",
                  "score": 11,
                  "body": "Boss lairs still need audio — ESP does not replace Immolator crackle."
            },
            {
                  "author": "ops_editor",
                  "age": "1 hour ago",
                  "score": 7,
                  "body": "Blog link has the readability section; match those colors to your stream overlay if you record."
            },
            {
                  "author": "stillwater_fan",
                  "age": "45 min ago",
                  "score": 5,
                  "body": "On Stillwater I disable trip mines until second trait point."
            },
            {
                  "author": "trap_skeptic",
                  "age": "30 min ago",
                  "score": 3,
                  "body": "Without sound you walk into outer wire anyway — keep headphones on."
            }
      ],
  },
  {
    slug: "aimbot-smoothing-for-lebel",
    category: "Guides & Builds",
    categoryTone: "blue",
    title: "What smoothing feels natural on a Lebel?",
    excerpt: "Example discussion about FOV, hold-to-aim, and bullet drop on a high-velocity rifle.",
    author: 'guide_team',
    age: "5 hours ago",
    commentsCount: 6,
    upvotes: 71,
    flair: "Aim",
    sourceTitle: "Hunt Showdown Aimbot Guide",
    sourcePath: "/blogs/hunt-showdown-aimbot-guide/",
    body: [
          "Lebel hits hard but the drop still punishes wide FOV snaps past 80 meters. Illustrative config talk only.",
          "Hold-to-aim on a side mouse button plus smoothing above 6 looks less robotic in spectate — not a ban shield, just less obvious motion."
    ],
    comments: [
            {
                  "author": "lebel_main",
                  "age": "4 hours ago",
                  "score": 16,
                  "body": "Tight FOV cone around crosshair; expand only after headshot drills."
            },
            {
                  "author": "sparks_88",
                  "age": "4 hours ago",
                  "score": 9,
                  "body": "Visualize bullet speed setting — blog mentions ballistics for a reason."
            },
            {
                  "author": "duelist_two",
                  "age": "3 hours ago",
                  "score": 8,
                  "body": "Dupes feel worse on Lebel because of one-tap expectation."
            },
            {
                  "author": "config_nerd",
                  "age": "2 hours ago",
                  "score": 6,
                  "body": "Save two profiles: scoped Spitzer vs iron sights."
            },
            {
                  "author": "audio_first",
                  "age": "1 hour ago",
                  "score": 4,
                  "body": "Aim help does not beat sound cue on elevation — hill fights still manual."
            },
            {
                  "author": "fair_play_reader",
                  "age": "40 min ago",
                  "score": 2,
                  "body": "Remember Crytek talks about input analysis now; none of this is risk-free."
            }
      ],
  },
  {
    slug: "cloud-dma-latency-hunt",
    category: "General",
    categoryTone: "purple",
    title: "Does Cloud DMA add noticeable latency in Hunt?",
    excerpt: "Illustrative comparison between overlay software and a hardware read path for 1896.",
    author: 'guide_team',
    age: "7 hours ago",
    commentsCount: 4,
    upvotes: 58,
    flair: "DMA",
    sourceTitle: "Hunt Showdown Cloud DMA",
    sourcePath: "/blogs/hunt-showdown-cloud-dma/",
    body: [
          "DMA threads often ask about ping versus overlay delay. Cloud path adds hops; software adds render cost.",
          "Neither removes EAC risk. Read the Cloud DMA article before buying hardware you do not need."
    ],
    comments: [
            {
                  "author": "fiber_tester",
                  "age": "6 hours ago",
                  "score": 12,
                  "body": "Ethernet to host PC still matters more than menu theme."
            },
            {
                  "author": "overlay_user",
                  "age": "5 hours ago",
                  "score": 9,
                  "body": "Software feels snappier for DUO callouts; DMA is a different budget tier."
            },
            {
                  "author": "shop_compare",
                  "age": "4 hours ago",
                  "score": 5,
                  "body": "Checkout paths differ — do not buy DMA expecting the same loader as core Hunt."
            },
            {
                  "author": "honest_limit",
                  "age": "3 hours ago",
                  "score": 4,
                  "body": "No immunity promises; Fair Play blog posts are worth a skim."
            }
      ],
  },
  {
    slug: "hwid-ban-fresh-install",
    category: "General",
    categoryTone: "purple",
    title: "HWID ban — does a fresh Windows install help alone?",
    excerpt: "Example Q&A on identifiers, spoofers, and what a ban actually touches.",
    author: 'guide_team',
    age: "8 hours ago",
    commentsCount: 5,
    upvotes: 63,
    flair: "HWID",
    sourceTitle: "Hunt Showdown HWID Spoofer",
    sourcePath: "/blogs/hunt-showdown-hwid-spoofer/",
    body: [
          "An EAC ban can bind to hardware fingerprints. Reinstalling Windows without addressing IDs may not be enough.",
          "Spoofer listings describe scope on the product page — illustrative only, not legal advice."
    ],
    comments: [
            {
                  "author": "sysbuilder",
                  "age": "7 hours ago",
                  "score": 14,
                  "body": "Document what changed: board, disk, MAC, account — chaos makes support harder."
            },
            {
                  "author": "appeal_track",
                  "age": "6 hours ago",
                  "score": 8,
                  "body": "UGC tools are separate checkout from spoofer — different job."
            },
            {
                  "author": "second_pc",
                  "age": "5 hours ago",
                  "score": 6,
                  "body": "Some players keep a clean rig for vanilla Hunt; expensive but simple."
            },
            {
                  "author": "read_first",
                  "age": "4 hours ago",
                  "score": 5,
                  "body": "Safety article says no undetected claims — plan for account loss."
            },
            {
                  "author": "spoofer_faq",
                  "age": "3 hours ago",
                  "score": 3,
                  "body": "Link internal /go/hwid-spoofer/ when ready; avoid random downloads."
            }
      ],
  },
  {
    slug: "eac-patch-day-wait",
    category: "Patch Talk",
    categoryTone: "orange",
    title: "Patch day — how long do you wait after EAC updates?",
    excerpt: "Illustrative habit: status banner, seller note, then one test lobby.",
    author: 'guide_team',
    age: "10 hours ago",
    commentsCount: 4,
    upvotes: 41,
    flair: "EAC",
    sourceTitle: "Hunt Showdown Update Guide",
    sourcePath: "/blogs/hunt-showdown-update-season-guide/",
    body: [
          "When Hunt or EAC updates, loaders break before blogs finish updating. Waiting beats guessing.",
          "Update guide on the blog lists Fair Play context; this thread is example pacing only."
    ],
    comments: [
            {
                  "author": "patch_owl",
                  "age": "9 hours ago",
                  "score": 11,
                  "body": "24–48h unless seller pings green — faster if only content patch."
            },
            {
                  "author": "solo_trials",
                  "age": "8 hours ago",
                  "score": 7,
                  "body": "Quickplay test before bringing traits online."
            },
            {
                  "author": "status_watcher",
                  "age": "7 hours ago",
                  "score": 5,
                  "body": "EAC compatibility post is short and worth bookmarking."
            },
            {
                  "author": "no_rage",
                  "age": "6 hours ago",
                  "score": 4,
                  "body": "Rage toggling on patch day is how people eat instant sanctions."
            }
      ],
  },
  {
    slug: "skin-changer-teammate-view",
    category: "Community",
    categoryTone: "green",
    title: "Skin changer — do teammates see previews?",
    excerpt: "Cosmetic-only illustration: local client vs lobby inventory truth.",
    author: 'guide_team',
    age: "12 hours ago",
    commentsCount: 4,
    upvotes: 29,
    flair: "Cosmetics",
    sourceTitle: "Hunt Showdown Skin Changer",
    sourcePath: "/blogs/hunt-showdown-skin-changer/",
    body: [
          "Skin swaps render for you. Squad still sees owned gear in contract.",
          "Checkout is the skin-changer path, not the main Hunt software unless bundled elsewhere."
    ],
    comments: [
            {
                  "author": "fashion_hunter",
                  "age": "11 hours ago",
                  "score": 8,
                  "body": "Great for screenshots, zero effect on rival intel."
            },
            {
                  "author": "duo_lead",
                  "age": "10 hours ago",
                  "score": 5,
                  "body": "Tell friends you are previewing so they do not think you bought every DLC."
            },
            {
                  "author": "stream_safe",
                  "age": "9 hours ago",
                  "score": 4,
                  "body": "Still run stream-proof on ESP if you broadcast."
            },
            {
                  "author": "shop_path",
                  "age": "8 hours ago",
                  "score": 3,
                  "body": "/go/skin-changer/ is the redirect we link internally."
            }
      ],
  },
  {
    slug: "fps-drop-after-esp-skeletons",
    category: "Guides & Builds",
    categoryTone: "blue",
    title: "FPS drop after enabling skeleton ESP?",
    excerpt: "Illustrative tuning: distance caps, skeleton off in boss fights, GPU vs CPU blame.",
    author: 'guide_team',
    age: "14 hours ago",
    commentsCount: 5,
    upvotes: 47,
    flair: "Performance",
    sourceTitle: "Hunt Showdown FPS Boost",
    sourcePath: "/blogs/hunt-showdown-fps-boost/",
    body: [
          "Skeleton draws cost more than boxes on foggy maps. Drop skeleton past 60m or disable in boss lairs.",
          "FPS boost article covers game settings; fix those before blaming the overlay."
    ],
    comments: [
            {
                  "author": "fps_watcher",
                  "age": "13 hours ago",
                  "score": 10,
                  "body": "Cap at 144 and stop chasing 300 with every ESP layer on."
            },
            {
                  "author": "vram_8gb",
                  "age": "12 hours ago",
                  "score": 7,
                  "body": "Lower texture pool — Hunt is hungry."
            },
            {
                  "author": "minimal_esp",
                  "age": "11 hours ago",
                  "score": 6,
                  "body": "Boxes + names only still wins DUOs."
            },
            {
                  "author": "blog_ref",
                  "age": "10 hours ago",
                  "score": 4,
                  "body": "Linked FPS blog has overlay section order."
            },
            {
                  "author": "capture_off",
                  "age": "9 hours ago",
                  "score": 3,
                  "body": "Disable relive/overlay recorders while testing."
            }
      ],
  },
  {
    slug: "radar-vs-esp-duos",
    category: "Community",
    categoryTone: "green",
    title: "DUO teams: radar only or full ESP?",
    excerpt: "Example callout rhythm — who glances radar versus who reads wallhack lines.",
    author: 'guide_team',
    age: "16 hours ago",
    commentsCount: 4,
    upvotes: 35,
    flair: "Radar",
    sourceTitle: "Hunt Showdown Wallhack and Radar",
    sourcePath: "/blogs/hunt-showdown-wallhack-radar/",
    body: [
          "Radar helps the secondary player with off-screen compass; ESP helps primary peek timing.",
          "Wallhack article compares both — this is illustrative team talk only."
    ],
    comments: [
            {
                  "author": "duo_caller",
                  "age": "15 hours ago",
                  "score": 9,
                  "body": "We mute radar audio and use ping wheel still."
            },
            {
                  "author": "support_mic",
                  "age": "14 hours ago",
                  "score": 6,
                  "body": "Call distance, not color names — less confusion."
            },
            {
                  "author": "split_roles",
                  "age": "13 hours ago",
                  "score": 5,
                  "body": "Primary full ESP, secondary radar + traps only."
            },
            {
                  "author": "honest_team",
                  "age": "12 hours ago",
                  "score": 3,
                  "body": "Illustrative only — we are not claiming tourney results."
            }
      ],
  },
  {
    slug: "buying-hunt-showdown-cheat-checklist",
    category: "Community",
    categoryTone: "green",
    title: "Checklist before buying Hunt Showdown cheat?",
    excerpt: "Feature list, update wording, refund text, and which checkout path matches the goal.",
    author: 'guide_team',
    age: "18 hours ago",
    commentsCount: 6,
    upvotes: 52,
    flair: "Buying",
    sourceTitle: "Best Hunt Showdown Cheat for PC",
    sourcePath: "/blogs/best-hunt-showdown-cheat/",
    body: [
          "Buyers skip refund paragraphs. Read them before card submit.",
          "Comparison blog maps five products; forum is illustrative Q&A."
    ],
    comments: [
            {
                  "author": "buyer_one",
                  "age": "17 hours ago",
                  "score": 12,
                  "body": "Screenshot the feature table at purchase time."
            },
            {
                  "author": "addon_split",
                  "age": "16 hours ago",
                  "score": 8,
                  "body": "DMA and core software are different checkouts."
            },
            {
                  "author": "faq_reader",
                  "age": "15 hours ago",
                  "score": 6,
                  "body": "Cheat FAQ blog answers half these posts."
            },
            {
                  "author": "support_line",
                  "age": "14 hours ago",
                  "score": 5,
                  "body": "Billing is on merchant site — not this forum."
            },
            {
                  "author": "no_fake_proof",
                  "age": "13 hours ago",
                  "score": 4,
                  "body": "No fake reviews here by design."
            },
            {
                  "author": "moiz_path",
                  "age": "12 hours ago",
                  "score": 3,
                  "body": "Internal /go/hunt-showdown/ is what we publish in articles."
            }
      ],
  },
  {
    slug: "stream-proof-obs-hunt",
    category: "Guides & Builds",
    categoryTone: "blue",
    title: "OBS still catching my overlay — now what?",
    excerpt: "Illustrative capture test: game capture vs display capture with stream-proof toggle.",
    author: 'guide_team',
    age: "20 hours ago",
    commentsCount: 4,
    upvotes: 26,
    flair: "Stream",
    sourceTitle: "Hunt Showdown Cheat Features",
    sourcePath: "/blogs/hunt-showdown-cheat-features/",
    body: [
          "Stream-proof modes vary by seller. Record a minute locally before going live.",
          "Features blog mentions stream-proof under extras — verify on your build."
    ],
    comments: [
            {
                  "author": "obs_tester",
                  "age": "19 hours ago",
                  "score": 7,
                  "body": "Replay file, do not trust preview pane alone."
            },
            {
                  "author": "dual_pc",
                  "age": "18 hours ago",
                  "score": 5,
                  "body": "Second PC capture still safest for sponsors."
            },
            {
                  "author": "toggle_order",
                  "age": "17 hours ago",
                  "score": 4,
                  "body": "Enable stream-proof before launching Hunt."
            },
            {
                  "author": "no_guarantee",
                  "age": "16 hours ago",
                  "score": 2,
                  "body": "Updates can break capture hiding — retest after patches."
            }
      ],
  },
  {
    slug: "ugc-tools-vs-gameplay",
    category: "General",
    categoryTone: "purple",
    title: "UGC tools — separate from gameplay software?",
    excerpt: "Example clarification: appeals workflow vs ESP loader.",
    author: 'guide_team',
    age: "1 day ago",
    commentsCount: 4,
    upvotes: 22,
    flair: "UGC",
    sourceTitle: "Hunt Showdown UGC Tools",
    sourcePath: "/blogs/hunt-showdown-ugc-tools/",
    body: [
          "UGC checkout is for appeal automation and case docs, not in-match wallhacks.",
          "Read UGC blog before mixing it up with Hunt software cart."
    ],
    comments: [
            {
                  "author": "appeal_help",
                  "age": "23 hours ago",
                  "score": 6,
                  "body": "Still need your own evidence — tool does not auto-win appeals."
            },
            {
                  "author": "shop_ugc",
                  "age": "22 hours ago",
                  "score": 4,
                  "body": "/go/ugc/ redirect is published on product cards."
            },
            {
                  "author": "gameplay_split",
                  "age": "21 hours ago",
                  "score": 3,
                  "body": "I keep UGC docs on a different drive from game PC."
            },
            {
                  "author": "illustrative",
                  "age": "20 hours ago",
                  "score": 2,
                  "body": "Thread is example text, not a customer story."
            }
      ],
  },
  {
    slug: "fair-play-anybrain-input",
    category: "Patch Talk",
    categoryTone: "orange",
    title: "Crytek Anybrain input news — change aim settings?",
    excerpt: "Illustrative reaction to Fair Play posts about input analysis on PC.",
    author: 'guide_team',
    age: "1 day ago",
    commentsCount: 5,
    upvotes: 38,
    flair: "Fair Play",
    sourceTitle: "Hunt Showdown Cheat Safety",
    sourcePath: "/blogs/hunt-showdown-cheat-safety/",
    body: [
          "Official posts mention detecting abnormal mouse patterns. Conservative settings are not immunity.",
          "Safety blog covers honest limits — read before tweaking FOV wider."
    ],
    comments: [
            {
                  "author": "news_reader",
                  "age": "23 hours ago",
                  "score": 9,
                  "body": "Toggler behavior still called out in Crytek posts."
            },
            {
                  "author": "input_human",
                  "age": "22 hours ago",
                  "score": 6,
                  "body": "Linear curves and smoothing help presentation, not permission."
            },
            {
                  "author": "vanilla_push",
                  "age": "21 hours ago",
                  "score": 5,
                  "body": "Some folks quit tools entirely after blog updates — valid choice."
            },
            {
                  "author": "report_anyway",
                  "age": "20 hours ago",
                  "score": 4,
                  "body": "In-game report still matters for manual review."
            },
            {
                  "author": "no_promises",
                  "age": "19 hours ago",
                  "score": 3,
                  "body": "Site does not claim undetected — plan for loss."
            }
      ],
  },
  {
    slug: "boss-esp-butcher-spider",
    category: "Guides & Builds",
    categoryTone: "blue",
    title: "Boss ESP — butcher clues without autopilot?",
    excerpt: "Example use: direction ping, not deleting boss mechanics.",
    author: 'guide_team',
    age: "1 day ago",
    commentsCount: 5,
    upvotes: 44,
    flair: "Boss",
    sourceTitle: "Hunt Showdown ESP Guide",
    sourcePath: "/blogs/hunt-showdown-esp-guide/",
    body: [
          "Boss markers save time but audio clues still teach new players map flow.",
          "ESP guide lists boss layer separately from player boxes."
    ],
    comments: [
            {
                  "author": "boss_timer",
                  "age": "23 hours ago",
                  "score": 8,
                  "body": "Disable marker after banish phase — reduce clutter."
            },
            {
                  "author": "spider_main",
                  "age": "22 hours ago",
                  "score": 6,
                  "body": "Spider vertical fights need sound more than dots."
            },
            {
                  "author": "butcher_axe",
                  "age": "21 hours ago",
                  "score": 5,
                  "body": "Choke holds still manual — ESP does not block fire."
            },
            {
                  "author": "duo_sync",
                  "age": "20 hours ago",
                  "score": 4,
                  "body": "Call boss percent out loud for teammate traits."
            },
            {
                  "author": "illustrative_only",
                  "age": "19 hours ago",
                  "score": 2,
                  "body": "Example strategies, not endorsed wins."
            }
      ],
  },
  {
    slug: "first-loader-install-error",
    category: "General",
    categoryTone: "purple",
    title: "First loader install — Defender blocked file?",
    excerpt: "Illustrative troubleshooting: exclusions only when docs say so, hash check, support path.",
    author: 'guide_team',
    age: "1 day ago",
    commentsCount: 4,
    upvotes: 31,
    flair: "Setup",
    sourceTitle: "Hunt Showdown Cheat Installation",
    sourcePath: "/blogs/hunt-showdown-installation-guide/",
    body: [
          "False positives happen with any loader. Do not disable AV blindly.",
          "Installation blog lists order of operations for first launch."
    ],
    comments: [
            {
                  "author": "defender_log",
                  "age": "22 hours ago",
                  "score": 7,
                  "body": "Quarantine history screenshot helps real support."
            },
            {
                  "author": "clean_usb",
                  "age": "21 hours ago",
                  "score": 5,
                  "body": "Download only from post-checkout portal."
            },
            {
                  "author": "no_random_discord",
                  "age": "20 hours ago",
                  "score": 4,
                  "body": "Random DM files are not our checkout."
            },
            {
                  "author": "install_blog",
                  "age": "19 hours ago",
                  "score": 3,
                  "body": "Walkthrough matches forum advice."
            }
      ],
  },
  {
    slug: "compare-software-only-vs-bundle",
    category: "Community",
    categoryTone: "green",
    title: "Software only or bundle with spoofer?",
    excerpt: "Illustrative budget talk — when add-ons are optional.",
    author: 'guide_team',
    age: "2 days ago",
    commentsCount: 4,
    upvotes: 27,
    flair: "Compare",
    sourceTitle: "Hunt Showdown Cheat Comparison",
    sourcePath: "/blogs/hunt-showdown-cheat-comparison/",
    body: [
          "If you never had a ban, spoofer may be unnecessary spend. DMA is a different tier entirely.",
          "Comparison article walks five lanes with checkout paths."
    ],
    comments: [
            {
                  "author": "budget_hunt",
                  "age": "1 day ago",
                  "score": 6,
                  "body": "Start core Hunt /go/ only, add hwid later if needed."
            },
            {
                  "author": "bundle_skip",
                  "age": "1 day ago",
                  "score": 5,
                  "body": "Bundles rarely refund unused pieces — read terms."
            },
            {
                  "author": "dma_later",
                  "age": "23 hours ago",
                  "score": 4,
                  "body": "DMA after you understand software menus."
            },
            {
                  "author": "illustrative",
                  "age": "22 hours ago",
                  "score": 2,
                  "body": "No fabricated purchase receipts here."
            }
      ],
  },
  {
    slug: "dark-sight-users-esp-off",
    category: "General",
    categoryTone: "purple",
    title: "Do you disable ESP during Dark Sight?",
    excerpt: "Example habit — reduce clutter when legal wallhack is already on.",
    author: 'guide_team',
    age: "2 days ago",
    commentsCount: 5,
    upvotes: 33,
    flair: "Dark Sight",
    sourceTitle: "Hunt Showdown Cheat Features",
    sourcePath: "/blogs/hunt-showdown-cheat-features/",
    body: [
          "Dark Sight already reveals silhouettes. Extra boxes can obscure edges.",
          "Not a rule, just an illustrative toggle routine."
    ],
    comments: [
            {
                  "author": "trait_runner",
                  "age": "1 day ago",
                  "score": 7,
                  "body": "Hotkey profile swap is faster than menu diving."
            },
            {
                  "author": "contrast",
                  "age": "1 day ago",
                  "score": 5,
                  "body": "Thinner lines help during DS."
            },
            {
                  "author": "team_call",
                  "age": "23 hours ago",
                  "score": 4,
                  "body": "Partner keeps radar on while I clear visuals."
            },
            {
                  "author": "new_player",
                  "age": "22 hours ago",
                  "score": 3,
                  "body": "Vanilla DS might be enough training anyway."
            },
            {
                  "author": "risk_note",
                  "age": "21 hours ago",
                  "score": 2,
                  "body": "DS does not make third-party tools allowed."
            }
      ],
  },
  {
    slug: "loot-esp-supply-timing",
    category: "Guides & Builds",
    categoryTone: "blue",
    title: "Loot ESP — when is supply highlighting too noisy?",
    excerpt: "Supply crates vs world spawns — illustrative filter talk.",
    author: 'guide_team',
    age: "2 days ago",
    commentsCount: 4,
    upvotes: 36,
    flair: "Loot",
    sourceTitle: "Hunt Showdown Cheat Features",
    sourcePath: "/blogs/hunt-showdown-cheat-features/",
    body: [
          "Highlighting every toolbox hides trap icons. Filter by tier or distance.",
          "Features walkthrough mentions loot layer next to trap warnings."
    ],
    comments: [
            {
                  "author": "scav_fast",
                  "age": "1 day ago",
                  "score": 8,
                  "body": "Ammo boxes only until cash for traits."
            },
            {
                  "author": "quiet_maps",
                  "age": "1 day ago",
                  "score": 5,
                  "body": "Mute world clutter on empty lobbies."
            },
            {
                  "author": "blog_link",
                  "age": "23 hours ago",
                  "score": 4,
                  "body": "Features article order matches setup sequence."
            },
            {
                  "author": "sound_loot",
                  "age": "22 hours ago",
                  "score": 3,
                  "body": "Cash register audio still beats ESP for stealth."
            }
      ],
  },
  {
    slug: "pre-purchase-faq-license",
    category: "Community",
    categoryTone: "green",
    title: "License tied to one PC — how strict?",
    excerpt: "Illustrative FAQ mirror: HWID lock, portal login, reset policy.",
    author: 'guide_team',
    age: "2 days ago",
    commentsCount: 6,
    upvotes: 40,
    flair: "FAQ",
    sourceTitle: "Hunt Showdown Cheat FAQ",
    sourcePath: "/blogs/hunt-showdown-cheat-faq/",
    body: [
          "Most loaders bind to hardware until support resets. Document components before swapping parts.",
          "FAQ blog is the canonical pre-purchase list — forum expands examples only."
    ],
    comments: [
            {
                  "author": "laptop_swap",
                  "age": "1 day ago",
                  "score": 9,
                  "body": "Travel gaming = ask support before flying."
            },
            {
                  "author": "one_key",
                  "age": "1 day ago",
                  "score": 6,
                  "body": "Share policy usually forbids account sharing."
            },
            {
                  "author": "portal_save",
                  "age": "23 hours ago",
                  "score": 5,
                  "body": "PDF your order ID."
            },
            {
                  "author": "reset_wait",
                  "age": "22 hours ago",
                  "score": 4,
                  "body": "Resets are manual — not instant."
            },
            {
                  "author": "checkout_moiz",
                  "age": "21 hours ago",
                  "score": 3,
                  "body": "Buy through published /go/ paths only."
            },
            {
                  "author": "illustrative",
                  "age": "20 hours ago",
                  "score": 2,
                  "body": "No fake support tickets pasted here."
            }
      ],
  },
];

export function getForumPost(slug: string): ForumPost | undefined {
  return forumPosts.find((post) => post.slug === slug);
}
