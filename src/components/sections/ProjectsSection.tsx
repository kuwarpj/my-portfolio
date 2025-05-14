
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { SectionWrapper } from '@/components/common/SectionWrapper';
import { portfolioData } from '@/config/site';
import type { ProjectItem as ProjectItemType } from '@/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Eye, X, Check } from 'lucide-react';

function ProjectCard({ project, onOpenDialog }: { project: ProjectItemType; onOpenDialog: (project: ProjectItemType) => void }) {
  return (
    <Card
      className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full group cursor-pointer"
      onClick={() => onOpenDialog(project)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onOpenDialog(project); }}
      aria-label={`View details for ${project.title}`}
    >
      <CardHeader className="p-0">
        <div className="overflow-hidden relative">
          {project.videoUrl ? (
            project.videoUrl.includes('loom.com/embed/') ? (
              <div className="relative w-full" style={{ paddingBottom: '56.25%', height: 0 }}>
                <iframe
                  src={project.videoUrl}
                  frameBorder="0"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full"
                  title={`${project.title} video walkthrough`}
                ></iframe>
              </div>
            ) : (
              <div className="aspect-video">
                <video controls className="w-full h-full object-cover">
                  <source src={project.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            )
          ) : project.imageUrl ? (
            <div className="aspect-video relative">
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                data-ai-hint={project.dataAiHint || "project image"}
              />
            </div>
          ) : (
            <div className="aspect-video w-full h-full bg-muted flex items-center justify-center">
              <p className="text-muted-foreground">No media available</p>
            </div>
          )}
          {(project.imageUrl || project.videoUrl) && (
             <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium h-10 px-4 py-2 text-white border-white hover:bg-white hover:text-gray-900 border">
                   <Eye className="mr-2 h-4 w-4" /> View Details
                </div>
              </div>
          )}
        </div>
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <CardTitle className="text-xl font-semibold text-primary mb-2">{project.title}</CardTitle>
        <CardDescription className="text-muted-foreground text-sm mb-4 line-clamp-3">{project.description}</CardDescription>
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech: string) => (
            <Badge key={tech} variant="secondary" className="bg-accent/10 text-accent border-accent/20">
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 4 && <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20">...</Badge>}
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0 flex justify-end space-x-2">
        {project.liveUrl && (
          <Button variant="outline" size="sm" asChild onClick={(e) => e.stopPropagation()}>
            <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" /> Live
            </Link>
          </Button>
        )}
        {project.repoUrl && (
          <Button variant="outline" size="sm" asChild onClick={(e) => e.stopPropagation()}>
            <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" /> Code
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}

export function ProjectsSection() {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState<ProjectItemType | null>(null);

  const handleOpenDialog = (project: ProjectItemType) => {
    setSelectedProject(project);
  };

  const handleCloseDialog = () => {
    setSelectedProject(null);
  };

  return (
    <SectionWrapper id="projects" title="My Projects" subtitle="A selection of my recent work. Click to learn more." className="bg-gradient-to-b from-secondary to-background">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={project.id} className="animate-fadeInUp" style={{ animationDelay: `${index * 0.1}s` }}>
            <ProjectCard project={project} onOpenDialog={handleOpenDialog} />
          </div>
        ))}
      </div>

      {selectedProject && (
        <Dialog open={!!selectedProject} onOpenChange={(isOpen) => !isOpen && handleCloseDialog()}>
          <DialogContent className="sm:max-w-3xl max-h-[90vh] flex flex-col p-0">
            <DialogHeader className="p-6 pb-0">
              <DialogTitle className="text-2xl font-extrabold font-heading text-primary">{selectedProject.title}</DialogTitle>
              <DialogDescription className="text-sm text-muted-foreground">{selectedProject.description}</DialogDescription>
            </DialogHeader>

            <div className="p-6 overflow-y-auto flex-grow space-y-6">
              <div className="relative rounded-lg overflow-hidden">
                {selectedProject.videoUrl ? (
                  selectedProject.videoUrl.includes('loom.com/embed/') ? (
                    <div className="relative w-full" style={{ paddingBottom: '56.25%', height: 0 }}>
                       <iframe
                          src={selectedProject.videoUrl}
                          frameBorder="0"
                          allowFullScreen
                          className="absolute top-0 left-0 w-full h-full"
                          title={`${selectedProject.title} video walkthrough`}
                       ></iframe>
                    </div>
                  ) : (
                    <div className="aspect-video">
                      <video controls className="w-full h-full object-cover">
                        <source src={selectedProject.videoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  )
                ) : selectedProject.imageUrl ? (
                  <div className="aspect-video relative">
                    <Image
                      src={selectedProject.imageUrl}
                      alt={selectedProject.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover"
                      data-ai-hint={selectedProject.dataAiHint || "project image"}/>
                  </div>
                ) : (
                  <div className="aspect-video w-full h-full bg-muted flex items-center justify-center">
                    <p className="text-muted-foreground">No media available</p>
                  </div>
                )}
              </div>

              {selectedProject.detailedDescription && selectedProject.detailedDescription.length > 0 && (
                <div>
                  <h4 className="font-extrabold font-heading text-lg mb-2 text-primary">Key Features & Details:</h4>
                  <div className="space-y-2 text-foreground">
                    {selectedProject.detailedDescription.map((detail: string, i: number) => (
                      <div key={i} className="flex items-start">
                        <Check className="w-4 h-4 mr-2 mt-1 text-accent flex-shrink-0" />
                        <p className="flex-1">{detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <h4 className="font-extrabold font-heading text-lg mb-2 text-primary">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech: string) => (
                    <Badge key={tech} variant="outline" className="border-accent text-accent">{tech}</Badge>
                  ))}
                </div>
              </div>
            </div>

            <DialogFooter className="p-6 pt-0 sm:justify-start border-t mt-auto">
              <div className="flex flex-wrap gap-3 w-full">
                {selectedProject.liveUrl && (
                  <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                    <Link href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" /> View Live
                    </Link>
                  </Button>
                )}
                {selectedProject.repoUrl && (
                  <Button variant="outline" asChild>
                    <Link href={selectedProject.repoUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" /> View Code
                    </Link>
                  </Button>
                )}
                <DialogClose asChild>
                  <Button variant="ghost" className="ml-auto">
                    <X className="mr-2 h-4 w-4" /> Close
                  </Button>
                </DialogClose>
              </div>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </SectionWrapper>
  );
}
