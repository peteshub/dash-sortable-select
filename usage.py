import dash_sortable_select
import dash
import dash_html_components as html
import dash_core_components as dcc

from flask import send_from_directory
import os

app = dash.Dash('')

app.scripts.config.serve_locally = True

app.layout = html.Div([

    html.Link(
        rel='stylesheet',
        href='/static/example.css'
    ),
    dash_sortable_select.MultiSelectSortableField(id="input",
        options=[{'label': 'Chocolate', 'value': 'chocolate' },
      { 'label': 'Vanilla', 'value': 'vanilla' },
      { 'label': 'Strawberry', 'value': 'strawberry' },
      { 'label': 'Caramel', 'value': 'caramel' },
      { 'label': 'Cookies and Cream', 'value': 'cookiescream' },
      { 'label': 'Peppermint', 'value': 'peppermint' }],
        value=['chocolate'])
    ,
    html.Div(id='output'),
    dcc.Dropdown(
        id='player-dropdown',
        options=[{'label': 'Chocolate', 'value': 'chocolate' },
      { 'label': 'Vanilla', 'value': 'vanilla' },
      { 'label': 'Strawberry', 'value': 'strawberry' },
      { 'label': 'Caramel', 'value': 'caramel' },
      { 'label': 'Cookies and Cream', 'value': 'cookiescream' },
      { 'label': 'Peppermint', 'value': 'peppermint' }],
        value=['chocolate'],
        searchable=True,
        multi=True
    )

])

@app.callback(
	dash.dependencies.Output('output', 'children'),
	[dash.dependencies.Input('input', 'value')])
def display_output(value):
    return 'You have entered {}'.format(value)

@app.server.route('/static/<path:path>')
def static_file(path):
    static_folder = os.path.join(os.getcwd(), 'static')
    return send_from_directory(static_folder, path)

if __name__ == '__main__':
    app.run_server(debug=True)
