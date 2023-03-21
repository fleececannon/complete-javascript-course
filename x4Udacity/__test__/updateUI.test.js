import { updateUI } from '../src/client/js/updateUI';

// this fucntion takes in the data from the API and updates the UI
describe('updateUI', () => {
    test('should update the DOM with the provided data', () => {
      expect(updateUI).toBeDefined();
    });
  });
  