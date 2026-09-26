import { motion, Variants } from 'motion/react'
import { Experience } from '../../types/types'
import { ExperienceDialog } from './experience-dialog'
import { Timeline, TimelineItem, TimelineDot, TimelineContent, Badge } from '@riselikesun/ui'

const textVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
}

interface ExperienceTimelineMobileProps {
  experiences: Experience[]
}

export default function ExperienceTimelineMobile({ experiences }: ExperienceTimelineMobileProps) {
  // Sort experiences based on priority
  const sortedExps = [...experiences].sort((a, b) => (a.priority ?? 99) - (b.priority ?? 99))

  return (
    <Timeline>
      {sortedExps.map((exp, i) => {
        const isActive = i === 0; // Highlight the most recent role

        // Use the first responsibility or achievement as a quick excerpt
        const highlights = [
          ...(exp.responsibilities || []),
          ...(exp.achievements || []),
          ...(exp.projects?.flatMap(p => p.responsibilities || []) || [])
        ];
        const excerpt = highlights.length > 0 ? highlights[0] : null;

        return (
          <TimelineItem key={i}>
            <TimelineDot active={isActive} />
            <TimelineContent>
              <motion.div variants={textVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-20px" }} className='flex flex-col gap-2'>
                <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                  {exp.role}
                  {isActive && <Badge variant="outline" className="border-primary/50 text-primary bg-primary/10">Featured role</Badge>}
                </h3>
                <p className="text-sm text-muted-foreground font-mono">
                  {exp.period}
                </p>
              </motion.div>

              {excerpt && (
                <motion.p
                  variants={textVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="text-muted-foreground mt-2 line-clamp-3"
                >
                  {excerpt}
                </motion.p>
              )}

              <motion.div
                variants={textVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="mt-3"
              >
                <ExperienceDialog exp={exp} />
              </motion.div>
            </TimelineContent>
          </TimelineItem>
        )
      })}
    </Timeline>
  )
}
