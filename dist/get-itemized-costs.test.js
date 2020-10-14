"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const get_itemized_costs_1 = __importDefault(require("./get-itemized-costs"));
const tickets = [
    {
        _type: 'line_item',
        id: 6540964,
        title: 'Early Bird',
        created_at: '2019-12-08T21:08:04.000+01:00',
        updated_at: '2019-12-08T21:08:04.000+01:00',
        quantity: 2,
        price: 205.0,
        test_mode: true,
        release_id: 1219124,
        release_slug: 'qqtuetcorjg',
        release_title: 'Early Bird',
    },
    {
        _type: 'line_item',
        id: 6540964,
        title: 'Early Bird combo free',
        created_at: '2019-12-08T21:08:04.000+01:00',
        updated_at: '2019-12-08T21:08:04.000+01:00',
        quantity: 1,
        price: 0,
        test_mode: true,
        release_id: 1219124,
        release_slug: 'qqtuetcorjg',
        release_title: 'Early Bird',
    },
    {
        _type: 'line_item',
        id: 6540964,
        title: 'Early Workshop ticket',
        created_at: '2019-12-08T21:08:04.000+01:00',
        updated_at: '2019-12-08T21:08:04.000+01:00',
        quantity: 1,
        price: 300,
        test_mode: true,
        release_id: 1219124,
        release_slug: 'qqtuetcorjg',
        release_title: 'Early Workshop ticket',
    },
];
const testEvent = {
    date: 'September 24-25, 2020',
    getDate: (ticketName) => {
        if (ticketName.includes('Workshop')) {
            return 'September 23, 2020';
        }
        return 'September 24-25, 2020';
    },
    label: 'JSConf Budapest 2020',
    invoiceIdPrefix: '',
    email: {
        replyToAddress: 'nec@jsconfbp.com',
        subject: 'Your invoice for Integration Test Event 2020',
        message: 'Please find your invoice for your Integration Test Event 2020 ticket purchase.',
    },
    getCateringOf: ticket => 98,
};
describe('sets catering as separate item', () => {
    test('create 2 items or every ticket type', () => {
        const items = get_itemized_costs_1.default([tickets[0], tickets[1]], testEvent);
        expect(items).toHaveLength(2);
    });
    test('item names and comments are correct', () => {
        const items = get_itemized_costs_1.default(tickets, testEvent);
        expect(items[0].label).toBe('Early Bird');
        expect(items[0].comment).toBe('Ticket for JSConf Budapest 2020, September 24-25, 2020');
        expect(items[1].label).toBe('Conference catering fee');
    });
});
describe('price rounding', () => {
    test('rounds prices to 2 digits', () => {
        const items = get_itemized_costs_1.default(tickets, testEvent);
        expect(items[0].grossUnitPrice.toString().split('.')[1].length).toBe(2);
        expect(items[1].grossUnitPrice.toString().split('.')[1].length).toBe(2);
    });
    test('rounding without errors', () => {
        const items = get_itemized_costs_1.default(tickets, testEvent);
        expect((items[0].grossUnitPrice + items[1].grossUnitPrice)).toBe(205);
    });
});
describe('event date', () => {
    test('determines date according to ticket name', () => {
        const items = get_itemized_costs_1.default([tickets[2]], testEvent);
        expect(items[0].label).toBe('Early Workshop ticket');
        expect(items[0].comment).toBe('Ticket for JSConf Budapest 2020, September 23, 2020');
        expect(items[1].label).toBe('Conference catering fee');
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LWl0ZW1pemVkLWNvc3RzLnRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvZ2V0LWl0ZW1pemVkLWNvc3RzLnRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSw4RUFBb0Q7QUFFcEQsTUFBTSxPQUFPLEdBQUc7SUFDZDtRQUNFLEtBQUssRUFBRSxXQUFXO1FBQ2xCLEVBQUUsRUFBRSxPQUFPO1FBQ1gsS0FBSyxFQUFFLFlBQVk7UUFDbkIsVUFBVSxFQUFFLCtCQUErQjtRQUMzQyxVQUFVLEVBQUUsK0JBQStCO1FBQzNDLFFBQVEsRUFBRSxDQUFDO1FBQ1gsS0FBSyxFQUFFLEtBQUs7UUFDWixTQUFTLEVBQUUsSUFBSTtRQUNmLFVBQVUsRUFBRSxPQUFPO1FBQ25CLFlBQVksRUFBRSxhQUFhO1FBQzNCLGFBQWEsRUFBRSxZQUFZO0tBQzVCO0lBQ0Q7UUFDRSxLQUFLLEVBQUUsV0FBVztRQUNsQixFQUFFLEVBQUUsT0FBTztRQUNYLEtBQUssRUFBRSx1QkFBdUI7UUFDOUIsVUFBVSxFQUFFLCtCQUErQjtRQUMzQyxVQUFVLEVBQUUsK0JBQStCO1FBQzNDLFFBQVEsRUFBRSxDQUFDO1FBQ1gsS0FBSyxFQUFFLENBQUM7UUFDUixTQUFTLEVBQUUsSUFBSTtRQUNmLFVBQVUsRUFBRSxPQUFPO1FBQ25CLFlBQVksRUFBRSxhQUFhO1FBQzNCLGFBQWEsRUFBRSxZQUFZO0tBQzVCO0lBQ0Q7UUFDRSxLQUFLLEVBQUUsV0FBVztRQUNsQixFQUFFLEVBQUUsT0FBTztRQUNYLEtBQUssRUFBRSx1QkFBdUI7UUFDOUIsVUFBVSxFQUFFLCtCQUErQjtRQUMzQyxVQUFVLEVBQUUsK0JBQStCO1FBQzNDLFFBQVEsRUFBRSxDQUFDO1FBQ1gsS0FBSyxFQUFFLEdBQUc7UUFDVixTQUFTLEVBQUUsSUFBSTtRQUNmLFVBQVUsRUFBRSxPQUFPO1FBQ25CLFlBQVksRUFBRSxhQUFhO1FBQzNCLGFBQWEsRUFBRSx1QkFBdUI7S0FD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QUcsRUFBRTtRQUNwRCxNQUFNLEtBQUssR0FBRyw0QkFBZ0IsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBRXhELE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLENBQUM7UUFDckQsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMscURBQXFELENBQUMsQ0FBQztRQUNyRixNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQ3pELENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ2V0SXRlbWl6ZWRDb3N0cyBmcm9tICcuL2dldC1pdGVtaXplZC1jb3N0cyc7XG5cbmNvbnN0IHRpY2tldHMgPSBbXG4gIHtcbiAgICBfdHlwZTogJ2xpbmVfaXRlbScsXG4gICAgaWQ6IDY1NDA5NjQsXG4gICAgdGl0bGU6ICdFYXJseSBCaXJkJyxcbiAgICBjcmVhdGVkX2F0OiAnMjAxOS0xMi0wOFQyMTowODowNC4wMDArMDE6MDAnLFxuICAgIHVwZGF0ZWRfYXQ6ICcyMDE5LTEyLTA4VDIxOjA4OjA0LjAwMCswMTowMCcsXG4gICAgcXVhbnRpdHk6IDIsXG4gICAgcHJpY2U6IDIwNS4wLFxuICAgIHRlc3RfbW9kZTogdHJ1ZSxcbiAgICByZWxlYXNlX2lkOiAxMjE5MTI0LFxuICAgIHJlbGVhc2Vfc2x1ZzogJ3FxdHVldGNvcmpnJyxcbiAgICByZWxlYXNlX3RpdGxlOiAnRWFybHkgQmlyZCcsXG4gIH0sXG4gIHtcbiAgICBfdHlwZTogJ2xpbmVfaXRlbScsXG4gICAgaWQ6IDY1NDA5NjQsXG4gICAgdGl0bGU6ICdFYXJseSBCaXJkIGNvbWJvIGZyZWUnLFxuICAgIGNyZWF0ZWRfYXQ6ICcyMDE5LTEyLTA4VDIxOjA4OjA0LjAwMCswMTowMCcsXG4gICAgdXBkYXRlZF9hdDogJzIwMTktMTItMDhUMjE6MDg6MDQuMDAwKzAxOjAwJyxcbiAgICBxdWFudGl0eTogMSxcbiAgICBwcmljZTogMCxcbiAgICB0ZXN0X21vZGU6IHRydWUsXG4gICAgcmVsZWFzZV9pZDogMTIxOTEyNCxcbiAgICByZWxlYXNlX3NsdWc6ICdxcXR1ZXRjb3JqZycsXG4gICAgcmVsZWFzZV90aXRsZTogJ0Vhcmx5IEJpcmQnLFxuICB9LFxuICB7XG4gICAgX3R5cGU6ICdsaW5lX2l0ZW0nLFxuICAgIGlkOiA2NTQwOTY0LFxuICAgIHRpdGxlOiAnRWFybHkgV29ya3Nob3AgdGlja2V0JyxcbiAgICBjcmVhdGVkX2F0OiAnMjAxOS0xMi0wOFQyMTowODowNC4wMDArMDE6MDAnLFxuICAgIHVwZGF0ZWRfYXQ6ICcyMDE5LTEyLTA4VDIxOjA4OjA0LjAwMCswMTowMCcsXG4gICAgcXVhbnRpdHk6IDEsXG4gICAgcHJpY2U6IDMwMCxcbiAgICB0ZXN0X21vZGU6IHRydWUsXG4gICAgcmVsZWFzZV9pZDogMTIxOTEyNCxcbiAgICByZWxlYXNlX3NsdWc6ICdxcXR1ZXRjb3JqZycsXG4gICAgcmVsZWFzZV90aXRsZTogJ0Vhcmx5IFdvcmtzaG9wIHRpY2tldCcsXG4gIH0sXG5dO1xuXG5jb25zdCB0ZXN0RXZlbnQgPSB7XG4gIGRhdGU6ICdTZXB0ZW1iZXIgMjQtMjUsIDIwMjAnLFxuICBnZXREYXRlOiAodGlja2V0TmFtZSkgPT4ge1xuICAgIGlmICh0aWNrZXROYW1lLmluY2x1ZGVzKCdXb3Jrc2hvcCcpKSB7XG4gICAgICByZXR1cm4gJ1NlcHRlbWJlciAyMywgMjAyMCc7XG4gICAgfVxuXG4gICAgcmV0dXJuICdTZXB0ZW1iZXIgMjQtMjUsIDIwMjAnO1xuICB9LFxuICBsYWJlbDogJ0pTQ29uZiBCdWRhcGVzdCAyMDIwJyxcbiAgaW52b2ljZUlkUHJlZml4OiAnJyxcbiAgZW1haWw6IHtcbiAgICByZXBseVRvQWRkcmVzczogJ25lY0Bqc2NvbmZicC5jb20nLFxuICAgIHN1YmplY3Q6ICdZb3VyIGludm9pY2UgZm9yIEludGVncmF0aW9uIFRlc3QgRXZlbnQgMjAyMCcsXG4gICAgbWVzc2FnZTogJ1BsZWFzZSBmaW5kIHlvdXIgaW52b2ljZSBmb3IgeW91ciBJbnRlZ3JhdGlvbiBUZXN0IEV2ZW50IDIwMjAgdGlja2V0IHB1cmNoYXNlLicsXG4gIH0sXG4gIGdldENhdGVyaW5nT2Y6IHRpY2tldCA9PiA5OCxcbn07XG5cbmRlc2NyaWJlKCdzZXRzIGNhdGVyaW5nIGFzIHNlcGFyYXRlIGl0ZW0nLCAoKSA9PiB7XG4gIHRlc3QoJ2NyZWF0ZSAyIGl0ZW1zIG9yIGV2ZXJ5IHRpY2tldCB0eXBlJywgKCkgPT4ge1xuICAgIGNvbnN0IGl0ZW1zID0gZ2V0SXRlbWl6ZWRDb3N0cyhbdGlja2V0c1swXSwgdGlja2V0c1sxXV0sIHRlc3RFdmVudCk7XG4gICAgZXhwZWN0KGl0ZW1zKS50b0hhdmVMZW5ndGgoMik7XG4gIH0pO1xuXG4gIHRlc3QoJ2l0ZW0gbmFtZXMgYW5kIGNvbW1lbnRzIGFyZSBjb3JyZWN0JywgKCkgPT4ge1xuICAgIGNvbnN0IGl0ZW1zID0gZ2V0SXRlbWl6ZWRDb3N0cyh0aWNrZXRzLCB0ZXN0RXZlbnQpO1xuICAgIGV4cGVjdChpdGVtc1swXS5sYWJlbCkudG9CZSgnRWFybHkgQmlyZCcpO1xuICAgIGV4cGVjdChpdGVtc1swXS5jb21tZW50KS50b0JlKCdUaWNrZXQgZm9yIEpTQ29uZiBCdWRhcGVzdCAyMDIwLCBTZXB0ZW1iZXIgMjQtMjUsIDIwMjAnKTtcbiAgICBleHBlY3QoaXRlbXNbMV0ubGFiZWwpLnRvQmUoJ0NvbmZlcmVuY2UgY2F0ZXJpbmcgZmVlJyk7XG4gIH0pO1xufSk7XG5cbmRlc2NyaWJlKCdwcmljZSByb3VuZGluZycsICgpID0+IHtcbiAgdGVzdCgncm91bmRzIHByaWNlcyB0byAyIGRpZ2l0cycsICgpID0+IHtcbiAgICBjb25zdCBpdGVtcyA9IGdldEl0ZW1pemVkQ29zdHModGlja2V0cywgdGVzdEV2ZW50KTtcblxuICAgIGV4cGVjdChpdGVtc1swXS5ncm9zc1VuaXRQcmljZS50b1N0cmluZygpLnNwbGl0KCcuJylbMV0ubGVuZ3RoKS50b0JlKDIpO1xuICAgIGV4cGVjdChpdGVtc1sxXS5ncm9zc1VuaXRQcmljZS50b1N0cmluZygpLnNwbGl0KCcuJylbMV0ubGVuZ3RoKS50b0JlKDIpO1xuICB9KTtcblxuICB0ZXN0KCdyb3VuZGluZyB3aXRob3V0IGVycm9ycycsICgpID0+IHtcbiAgICBjb25zdCBpdGVtcyA9IGdldEl0ZW1pemVkQ29zdHModGlja2V0cywgdGVzdEV2ZW50KTtcblxuICAgIGV4cGVjdCgoaXRlbXNbMF0uZ3Jvc3NVbml0UHJpY2UgKyBpdGVtc1sxXS5ncm9zc1VuaXRQcmljZSkpLnRvQmUoMjA1KTtcbiAgfSk7XG59KTtcblxuZGVzY3JpYmUoJ2V2ZW50IGRhdGUnLCAoKSA9PiB7XG4gIHRlc3QoJ2RldGVybWluZXMgZGF0ZSBhY2NvcmRpbmcgdG8gdGlja2V0IG5hbWUnLCAoKSA9PiB7XG4gICAgY29uc3QgaXRlbXMgPSBnZXRJdGVtaXplZENvc3RzKFt0aWNrZXRzWzJdXSwgdGVzdEV2ZW50KTtcblxuICAgIGV4cGVjdChpdGVtc1swXS5sYWJlbCkudG9CZSgnRWFybHkgV29ya3Nob3AgdGlja2V0Jyk7XG4gICAgZXhwZWN0KGl0ZW1zWzBdLmNvbW1lbnQpLnRvQmUoJ1RpY2tldCBmb3IgSlNDb25mIEJ1ZGFwZXN0IDIwMjAsIFNlcHRlbWJlciAyMywgMjAyMCcpO1xuICAgIGV4cGVjdChpdGVtc1sxXS5sYWJlbCkudG9CZSgnQ29uZmVyZW5jZSBjYXRlcmluZyBmZWUnKTtcbiAgfSk7XG59KTtcbiJdfQ==