import { SITE } from "@config";
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      author: z.string().default(SITE.author),
      pubDatetime: z.date(),
      modDatetime: z.date().optional().nullable(),
      title: z.string(),
      featured: z.boolean().optional(),
      draft: z.boolean().optional(),
      tags: z.array(z.string()).default(["others"]),
      ogImage: image()
        .refine(img => img.width >= 1200 && img.height >= 630, {
          message: "OpenGraph image must be at least 1200 X 630 pixels!",
        })
        .or(z.string())
        .optional(),
      description: z.string(),
      canonicalURL: z.string().optional(),
    }),
});

export const collections = { blog };

/*

11. **Title:** "Voice Assistants: The AI You Talk To Every Day"
    - **Short Description:** Understanding the technology behind voice assistants.
    - **Long Description:** Unpack the technology that powers voice assistants like Siri and Alexa, from natural language processing to machine learning, and discuss their growing role in our daily lives and future potential.

12. **Title:** "The Green Side of AI: Technology for Sustainability"
    - **Short Description:** AI's contributions to environmental sustainability.
    - **Long Description:** Explore how artificial intelligence is being leveraged to tackle climate change, from optimizing energy consumption to monitoring deforestation, and the challenges of ensuring AI itself is sustainable.

13. **Title:** "AI in Space Exploration: The New Frontier"
    - **Short Description:** How AI is powering space discovery.
    - **Long Description:** Delve into the role of AI in advancing space exploration, from analyzing vast amounts of astronomical data to autonomous spacecraft navigation, and how it's helping us uncover the mysteries of the universe.
*/
