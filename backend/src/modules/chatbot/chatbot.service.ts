import { Injectable } from '@nestjs/common';
import { ProductsService } from '../products/products.service';

@Injectable()
export class ChatbotService {
  constructor(private readonly productsService: ProductsService) {}

  reply(message: string) {
    const normalized = message.toLowerCase();
    const budgetMatch = normalized.match(/(\d{1,3})(tr|m|k)/);

    if (budgetMatch) {
      const value = Number(budgetMatch[1]);
      const unit = budgetMatch[2];
      const budget =
        unit === 'tr' ? value * 1_000_000 : unit === 'm' ? value * 1_000_000 : value * 1_000;

      const products = this.productsService.findTopByBudget(budget);
      return {
        text: `Muc ngan sach ${budget.toLocaleString('vi-VN')} VND co ${products.length} goi y phu hop.`,
        products,
      };
    }

    const products = this.productsService.findAll({ q: message }).slice(0, 3);
    if (products.length > 0) {
      return {
        text: 'Minh da tim thay mot so san pham lien quan. Ban muon so sanh chi tiet khong?',
        products,
      };
    }

    return {
      text: 'Ban thu mo ta nhu cau ro hon (vi du: laptop hoc tap duoi 20tr) de minh goi y chinh xac hon.',
      products: [],
    };
  }
}
