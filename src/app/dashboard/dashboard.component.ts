import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from '../../environments/environment';

interface Course {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  questions: number;
  duration: number;
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
  searchTerm = '';

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Course[]>(`${environment.apiUrl}/courses`).subscribe(data => {
      this.courses = data;
      this.applyFilter();
    });
  }

  applyFilter(): void {
    const term = this.searchTerm.toLowerCase();
    this.filtered = this.courses.filter(c => c.title.toLowerCase().includes(term));
    this.totalPages = Math.ceil(this.filtered.length / this.pageSize);
    this.page = 1;
    const start = 0;
    this.display = this.filtered.slice(start, this.pageSize);
  }

  loadMore(): void {
    if (this.page < this.totalPages) {
      this.page++;
      const start = (this.page - 1) * this.pageSize;
      this.display = [
        ...this.display,
        ...this.filtered.slice(start, start + this.pageSize)
      ];
    }
  }

  logout(): void {
    this.router.navigate(['/login']);
  }
}
