import { Badge } from "@/components/ui/badge"

export function SkillBadge({ skill }: { skill: string }) {
	return (
		<Badge variant="secondary" className="font-mono text-xs">
			{skill}
		</Badge>
	)
}
