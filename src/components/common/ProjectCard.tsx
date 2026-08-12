"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Calendar } from "lucide-react";
import { Project } from "@/types";
import { Badge } from "./Badge";
import { ImageOverlay } from "./ImageOverlay";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export function ProjectCard({ project, className }: ProjectCardProps) {
  // Determine badge color based on status
  const statusVariant = 
    project.status === "completed" ? "default" : 
    project.status === "ongoing" ? "secondary" : "outline";

  return (
    <Link href={`/projects/${project.slug}`} className={cn("block group outline-none", className)}>
      <div className="relative flex flex-col h-full bg-white rounded-2xl overflow-hidden shadow-sm border border-border/50 hover:shadow-xl transition-all duration-200 ease-out">
        
        {/* Image Container */}
        <div className="relative h-64 w-full overflow-hidden">
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <ImageOverlay variant="light" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Badges Overlay */}
          <div className="absolute top-4 left-4 right-4 flex justify-between items-start z-10">
            <Badge variant="surface" className="bg-white/90 backdrop-blur-sm">
              {project.category}
            </Badge>
            <Badge variant={statusVariant} className="capitalize shadow-sm">
              {project.status}
            </Badge>
          </div>
        </div>

        {/* Content Container */}
        <div className="flex flex-col flex-1 p-6">
          <h3 className="text-xl font-bold font-manrope text-primary mb-2 line-clamp-1 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          
          <p className="text-muted-foreground text-sm line-clamp-2 mb-6 flex-1">
            {project.description}
          </p>

          <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/50">
            <div className="flex items-center gap-4 text-xs text-muted-foreground font-medium min-w-0">
              {project.location && (
                <div className="flex items-center gap-1.5 min-w-0">
                  <MapPin className="size-3.5 shrink-0" />
                  <span className="truncate">{project.location}</span>
                </div>
              )}
              <div className="flex items-center gap-1 shrink-0">
                <Calendar className="size-3.5" />
                <span>{project.year}</span>
              </div>
            </div>

            <div className="flex items-center justify-center size-8 rounded-full bg-primary/5 text-primary transition-colors group-hover:bg-primary group-hover:text-white shrink-0">
              <ArrowRight className="size-4" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
