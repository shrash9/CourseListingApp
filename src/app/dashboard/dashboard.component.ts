import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

interface Course {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, HttpClientModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  courses: Course[] = [];
  filtered: Course[] = [];
  display: Course[] = [];
  page = 1;
  pageSize = 4;
  totalPages = 0;
  pages: number[] = [];
  searchTerm = '';

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Course[]>('assets/courses.json').subscribe(data => {
      this.courses = data;
      this.applyFilter();
    });
  }

  applyFilter(): void {
    const term = this.searchTerm.toLowerCase();
    this.filtered = this.courses.filter(c =>
      c.title.toLowerCase().includes(term)
    );
    this.totalPages = Math.ceil(this.filtered.length / this.pageSize);
    this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
    this.goToPage(1);
  }

  goToPage(p: number): void {
    if (p < 1 || p > this.totalPages) return;
    this.page = p;
    const start = (p - 1) * this.pageSize;
    this.display = this.filtered.slice(start, start + this.pageSize);
  }

  logout(): void {
    this.router.navigate(['/login']);
  }
}
