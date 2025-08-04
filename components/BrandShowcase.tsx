"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function BrandShowcase() {
  return (
    <div className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        {/* Color Palette Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
            Velora Brand Colors
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-2 rounded-lg bg-[#1A1F36]"></div>
              <p className="text-sm font-medium text-foreground">Midnight Blue</p>
              <p className="text-xs text-muted-foreground">#1A1F36</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-2 rounded-lg bg-[#E6F0FA] border border-border"></div>
              <p className="text-sm font-medium text-foreground">Soft Sky</p>
              <p className="text-xs text-muted-foreground">#E6F0FA</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-2 rounded-lg bg-[#3EB2FF]"></div>
              <p className="text-sm font-medium text-foreground">Accent Teal</p>
              <p className="text-xs text-muted-foreground">#3EB2FF</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-2 rounded-lg bg-[#F5F7FA] border border-border"></div>
              <p className="text-sm font-medium text-foreground">Light Gray</p>
              <p className="text-xs text-muted-foreground">#F5F7FA</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-2 rounded-lg bg-[#FFFFFF] border border-border"></div>
              <p className="text-sm font-medium text-foreground">White</p>
              <p className="text-xs text-muted-foreground">#FFFFFF</p>
            </div>
          </div>
        </motion.div>

        {/* Typography Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
            Typography
          </h2>
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-2">
                Montserrat Bold - H1 Heading
              </h1>
              <p className="text-muted-foreground">
                Open Sans Regular - Body text for optimal readability
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-2">
                Montserrat Bold - H2 Heading
              </h2>
              <p className="text-muted-foreground">
                Clean, modern typography that builds trust and clarity
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Montserrat Bold - H3 Heading
              </h3>
              <p className="text-muted-foreground">
                Professional yet approachable tone for business communication
              </p>
            </div>
          </div>
        </motion.div>

        {/* Brand Tone Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
            Brand Tone
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-xl font-bold mb-4 text-card-foreground">
                Confident but Approachable
              </h3>
              <p className="text-muted-foreground">
                We speak with authority about results while remaining accessible to small business owners.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-xl font-bold mb-4 text-card-foreground">
                Conversational, Not Corporate
              </h3>
              <p className="text-muted-foreground">
                Clear, direct communication that prioritizes understanding over jargon.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-xl font-bold mb-4 text-card-foreground">
                Results-Focused
              </h3>
              <p className="text-muted-foreground">
                Every message emphasizes concrete outcomes and measurable success.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-xl font-bold mb-4 text-card-foreground">
                Trust-Building
              </h3>
              <p className="text-muted-foreground">
                Transparency, guarantees, and real testimonials build credibility.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Component Examples */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
            Component Examples
          </h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              Primary Button
            </Button>
            <Button variant="secondary" className="bg-secondary text-secondary-foreground">
              Secondary Button
            </Button>
            <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
              Badge Example
            </Badge>
            <div className="velora-gradient text-white px-4 py-2 rounded-md">
              Gradient Text
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 