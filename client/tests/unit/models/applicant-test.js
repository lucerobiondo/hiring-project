import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module(`Unit | Model | applicant`, function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test(`it exists`, function (assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('applicant', {});
    assert.ok(model);
  });

  test('attributes should be an Object', function (assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('applicant', {
      attributes: { name: 'Frank', age: 40 },
    });

    const expected = {
      name: 'Frank',
      age: 40,
    };
    assert.propEqual(model.get('attributes'), expected);
  });

  test('should correctly with initial name and age', function (assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('applicant', { name: 'Frank', age: 40 });
    assert.equal(model.get('name'), 'Frank');
    assert.equal(model.get('age'), 40);
  });
});
