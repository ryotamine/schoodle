knex.select(['events.id', 'events.title', 'events.location', 'events.note', 'options_date.id as date_id', 'options_date.date_option']).from('events').innerJoin('options_date', 'events.id', '=', 'options_date.event_id').where('events.uniqueURL', req.params.event_id )

 <div class="form-row">
      <div class="form-group col-md-4">
        <label>Date: <%= date1 %> </label>
        <input type="checkbox" name="date1">
      </div>
      <div class="form-group col-md-4">
        <label>Date: <%= date2 %> </label>
        <input type="checkbox" name="date2">
      </div>
      <div class="form-group col-md-4">
        <label>Date: <%= date3 %> </label>
        <input type="checkbox" name="date3">
      </div>
    </div>
div class="d-inline"
