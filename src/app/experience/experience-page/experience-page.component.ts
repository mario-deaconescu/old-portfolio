import {AfterViewInit, ChangeDetectorRef, Component, QueryList, ViewChildren} from '@angular/core';
import {ProgressAnchorDirective} from "@app/experience/experience-page/progress-bar/progress-anchor.directive";
import {PageComponent} from "@app/page-component/page.component";
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-experience-page',
  templateUrl: './experience-page.component.html',
  styleUrls: ['./experience-page.component.sass']
})
export class ExperiencePageComponent extends PageComponent implements AfterViewInit{

  protected override readonly description: string = 'Learn about my experience in software development, game development, and robotics. Find out what technologies I have used and what I have learned.';

  @ViewChildren(ProgressAnchorDirective) anchors!: QueryList<ProgressAnchorDirective>;

  public frontEndTechnologies = [
    {name: 'Angular', icon: 'angular'},
    {name: 'Capacitor', icon: 'capacitor'},
    {name: 'Bootstrap', icon: 'bootstrap'},
    {name: 'Sass', icon: 'sass'},
    ];
  public backEndTechnologies = [
    {name: 'Django', icon: 'django'},
    {name: 'Node', icon: 'node'},
    {name: 'PostgreSQL', icon: 'postgres'},
    {name: 'MySQL', icon: 'mysql'},
    {name: 'Nginx', icon: 'nginx'},
    ];
  public gameDevTechnologies = [
    {name: 'Unity', icon: 'unity'},
    {name: 'Blender', icon: 'blender'},
    ];
  public roboticsTechnologies = [
    {name: 'AndroidStudio', icon: 'androidstudio'},
    {name: 'SolidWorks', icon: 'solidworks'},
    {name: 'RaspberryPi', icon: 'raspberrypi'},
    {name: 'Arduino', icon: 'arduino'},
    ];
  public programmingLanguages = [
    {name: 'C++', icon: 'cplusplus'},
    {name: 'C#', icon: 'csharp'},
    {name: 'Python', icon: 'python'},
    {name: 'Java', icon: 'java'},
    {name: 'JavaScript', icon: 'javascript'},
    {name: 'TypeScript', icon: 'typescript'},
    {name: 'HTML', icon: 'html'},
    {name: 'CSS', icon: 'css'},
    ];

  public editingTools = [
    {name: 'Photoshop', icon: 'photoshop'},
    {name: 'Illustrator', icon: 'illustrator'},
    {name: 'Premiere', icon: 'premiere'},
    {name: 'AfterEffects', icon: 'aftereffects'},
    ];

  public cloudServices = [
    {name: 'GoogleCloud', icon: 'googlecloud'},
    {name: 'Firebase', icon: 'firebase'},
    {name: 'Git', icon: 'git'},
    {name: 'Docker', icon: 'docker'},
    ];

  constructor(protected override meta: Meta, protected override title: Title, private cdr: ChangeDetectorRef) {
    super(meta, title);
  }
  ngAfterViewInit() {
    this.cdr.detectChanges();
  }

}
