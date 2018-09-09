import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Apollo, ApolloQueryObservable } from 'apollo-angular';
import { ApolloQueryResult } from 'apollo-client';
import { Subject } from 'rxjs/Subject';
import { DocumentNode } from 'graphql';
import { PostsService } from '../posts.service';
import { MatSnackBar } from '@angular/material';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

import { PostsInterface } from '../graphql/schema';

@Component({
  selector: 'post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  // Observable with GraphQL result
  public posts: ApolloQueryObservable<PostsInterface>;
  public listPostFilter: string;
  public postControl = new FormControl();
  private nameFilter: Subject<string> = new Subject<string>();

  // Inject Angular2Apollo service
  constructor(private _postService: PostsService, public snackBar: MatSnackBar) {
    var script = document.createElement(`script`);
    script.type = 'text/javascript';
    script.innerHTML = '   // Extends EditorUi to update I/O action states based on availability of backend\n' +
      '    (function()\n' +
      '    {\n' +
      '      var editorUiInit = EditorUi.prototype.init;\n' +
      '\n' +
      '      EditorUi.prototype.init = function()\n' +
      '      {\n' +
      '        editorUiInit.apply(this, arguments);\n' +
      '        this.actions.get(\'export\').setEnabled(false);\n' +
      '\n' +
      '        // Updates action states which require a backend\n' +
      '        if (!Editor.useLocalStorage)\n' +
      '        {\n' +
      '          mxUtils.post(OPEN_URL, \'\', mxUtils.bind(this, function(req)\n' +
      '          {\n' +
      '            var enabled = req.getStatus() != 404;\n' +
      '            this.actions.get(\'open\').setEnabled(enabled || Graph.fileSupport);\n' +
      '            this.actions.get(\'import\').setEnabled(enabled || Graph.fileSupport);\n' +
      '            this.actions.get(\'save\').setEnabled(enabled);\n' +
      '            this.actions.get(\'saveAs\').setEnabled(enabled);\n' +
      '            this.actions.get(\'export\').setEnabled(enabled);\n' +
      '          }));\n' +
      '        }\n' +
      '      };\n' +
      '\n' +
      '      // Adds required resources (disables loading of fallback properties, this can only\n' +
      '      // be used if we know that all keys are defined in the language specific file)\n' +
      '      mxResources.loadDefaultBundle = false;\n' +
      '      var bundle = mxResources.getDefaultBundle(RESOURCE_BASE, mxLanguage) ||\n' +
      '        mxResources.getSpecialBundle(RESOURCE_BASE, mxLanguage);\n' +
      '\n' +
      '      // Fixes possible asynchronous requests\n' +
      '      mxUtils.getAll([bundle, STYLE_PATH + \'/default.xml\'], function(xhr)\n' +
      '      {\n' +
      '        // Adds bundle text to resources\n' +
      '        mxResources.parse(xhr[0].getText());\n' +
      '\n' +
      '        // Configures the default graph theme\n' +
      '        var themes = new Object();\n' +
      '        themes[Graph.prototype.defaultThemeName] = xhr[1].getDocumentElement();\n' +
      '\n' +
      '        // Main\n' +
      '        new EditorUi(new Editor(urlParams[\'chrome\'] == \'0\', themes));\n' +
      '      }, function()\n' +
      '      {\n' +
      '        document.body.innerHTML = \'<center style="margin-top:10%;">Error loading resource files. Please check browser console.</center>\';\n' +
      '      });\n' +
      '    })();';
    document.head.appendChild(script);
  }

  public ngOnInit() {
    this.posts = this._postService.get();
    // Add debounce time to wait 300 ms for a new change instead of keep hitting the server
    this.postControl.valueChanges.debounceTime(300).subscribe(name => {
      this.nameFilter.next(name);
    });
  }

  public deletePost(id: string) {
    this._postService.delete(id)
      .then((response) => {
        this.openSnackBar(response.message, 'Delete');
        this.posts.refetch();
      })
      .catch((error) => {
        this.openSnackBar(error.message, 'Delete');

      })
  }

  public openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 4000,
    });
  }
}
