import { User } from '../models/user.model';

export class UserResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: User[];
}
