import { PaginatedResult } from './../../types/pagination';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { inject, Injectable, signal } from '@angular/core';
import { Member } from '../../types/member';

@Injectable({
  providedIn: 'root'
})
export class LikesService {
  private baseUrl = environment.apiUrl
  private http = inject(HttpClient)
  likeIds = signal<string[]>([])

  toggleLike(targetMemberId: string) {
    return this.http.post(`${this.baseUrl}likes/${targetMemberId}`, {})
  }

  getLikes(predicate: string, pageNumber: number, pageSize: number) {
    let params = new HttpParams()
      .append('pageNumber', pageNumber)
      .append('pageSize', pageSize)
      .append('predicate', predicate);

    return this.http.get<PaginatedResult<Member>>(this.baseUrl + 'likes', { params });
  }


  getLikeIds() {
    return this.http.get<string[]>(this.baseUrl + 'likes/list').subscribe({
      next: ids => this.likeIds.set(ids)
    })
  }

  clearLikeIds() {
    this.likeIds.set([])
  }
}
